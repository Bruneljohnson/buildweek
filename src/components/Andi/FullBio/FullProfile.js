import React, { useEffect, useState } from "react";
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";
import { trainers, workshopEx } from "../../../constants/data";
import classes from "./FullProfile.module.css";

const FullProfile = (props) => {
  const [showMore, setShowMore] = useState(false);

  const showExperiencesHandler = () => {
    setShowMore((prev) => !prev);
  };

  const { profileState } = props;

  /** Find user profile based on ID.
   * make experience only show when WorkEx exists.
   * the use user profile to find experiences, store as an array.
   */

  const profile = trainers.find((trainer) => trainer.pk === profileState);
  const profileInfo = profile ? profile?.fields : null;

  const workEx = workshopEx.filter(
    (ex) => ex.fields.trainer.fields.name === profileInfo?.name
  );

  /**Send email to ANDi (Temp FE Solution) */

  const sendEmailHandler = () => {
    const subject = "AreYouAvailable?";
    const description =
      workEx.length !== 0
        ? `Hey ${
            profileInfo?.name.split(" ")[0]
          }, Are you available to run a session?`
        : `Hey ${
            profileInfo?.name.split(" ")[0]
          }, Are you available to shadow a session?`;
    window.open(
      `mailto:${profileInfo?.email}?subject=${subject}&body=${description}`
    );
  };

  /** Restart show more when new ANDi is clicked.*/
  useEffect(() => {
    if (workEx.length === 0) {
      setShowMore(false);
    }
  }, [workEx]);

  return (
    <React.Fragment>
      {profileState && (
        <div className={classes.fullProfile}>
          <figure>
            <img src={profileInfo?.image} alt="default" />
          </figure>
          <div className={classes["fullProfile_title"]}>
            <h2>{profileInfo?.name}</h2>
            <div className={classes["fullProfile_title-subinfo"]}>
              <span>{profileInfo?.company_role}</span>-
              <span>{profileInfo?.club?.fields?.name}</span>
            </div>
          </div>

          {!showMore && (
            <ul className={classes["fullProfile_deets"]}>
              <li>
                <strong>Work Email</strong>
                <span>{profileInfo?.email}</span>
                <div className="line" />
              </li>

              <li>
                <strong>AND Level</strong>
                <span>{profileInfo?.ANDi_level}</span>
                <div className="line" />
              </li>
              <li>
                <strong>Last Trained</strong>
                <span>
                  {workEx.length !== 0 ? profileInfo?.last_trained : "N/A"}
                </span>
                <div className="line" />
              </li>
              <li>
                <strong>Experience</strong>
                <span>{workEx.length !== 0 ? "Yes" : "No"}</span>
                <div className="line" />
              </li>
            </ul>
          )}
          {workEx.length !== 0 && showMore && (
            <ul className={classes["fullProfile_deets"]}>
              {workEx.map((ex, i) => (
                <li key={i}>
                  <strong>Workshop & Experience Level</strong>
                  <div className={`${classes.exp}`}>
                    <span>{ex?.fields?.name}</span>
                    <span>{ex?.fields?.experience_level}</span>
                  </div>
                  <div className="line" />
                </li>
              ))}
            </ul>
          )}
          {workEx.length !== 0 && (
            <button
              type="button"
              className={classes.button}
              onClick={showExperiencesHandler}
            >
              {!showMore && <BsArrowRight size={30} />}
              {showMore && <BsArrowLeft size={30} />}
            </button>
          )}

          <button
            type="button"
            className={classes["button-email"]}
            onClick={sendEmailHandler}
          >
            Send Email
          </button>
        </div>
      )}
    </React.Fragment>
  );
};

export default FullProfile;
