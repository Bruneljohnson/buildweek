import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";
import ExperienceScale from "../../Experience/ExperienceScale";
import classes from "./FullProfile.module.css";

const FullProfile = (props) => {
  const workshopEx = useSelector((state) => state.data.workshopEx);
  const trainers = useSelector((state) => state.data.trainers);
  const [showMore, setShowMore] = useState(false);
  const [showKey, setShowKey] = useState(false);

  /** Passed Down to <ExperienceScale /> */
  const showKeyHandler = () => {
    setShowKey((prev) => !prev);
  };

  /** Show More Experiences */
  const showExperiencesHandler = () => {
    setShowMore((prev) => !prev);
  };

  const { profileState, isDesktop, onFullProfile } = props;

  /** Find user profile based on ID.
   * Experiences only show when WorkEx exists.
   * ANDi profile will show any experiences, store as an array.
   * Match experience to ANDi Name.
   */

  const profile =
    trainers.find((trainer) => trainer?.id === profileState) ?? null;

  const workEx = workshopEx.filter((ex) => ex?.trainer?.name === profile?.name);

  /**Send email to ANDi (Temp FE Solution) */

  const sendEmailHandler = () => {
    const subject = "AreYouAvailable?";
    const description =
      workEx.length !== 0
        ? `Hey ${
            profile?.name.split(" ")[0]
          }, Are you available to run a session?`
        : `Hey ${
            profile?.name.split(" ")[0]
          }, Are you available to shadow a session?`;

    window.open(
      `mailto:${profile?.email}?subject=${subject}&body=${description}`
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
            <img src={profile?.img} alt="default" />
          </figure>
          <div
            className={classes["fullProfile_title"]}
            onClick={!isDesktop && onFullProfile}
          >
            <h2>{profile?.name}</h2>
            <div className={classes["fullProfile_title-subinfo"]}>
              <span>{profile?.company_role}</span>
              <span>-</span>
              <span>{profile?.club?.name}</span>
            </div>
          </div>

          {!showMore && (
            <ul className={classes["fullProfile_deets"]}>
              <li>
                <strong>Work Email</strong>
                <span>{profile?.email}</span>
                <div className="line" />
              </li>

              <li>
                <strong>AND Level</strong>
                <span>{profile?.ANDi_level}</span>
                <div className="line" />
              </li>
              <li>
                <strong>Last Trained</strong>
                <span>
                  {workEx.length !== 0 ? profile?.last_trained : "N/A"}
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
                    <span>{ex?.workshop_name}</span>
                    <span>{Number.parseInt(ex?.experience_level)}</span>
                  </div>
                  <div className="line" />
                </li>
              ))}
            </ul>
          )}
          {workEx.length !== 0 && (
            <React.Fragment>
              <button
                type="button"
                className={classes.button}
                onClick={showExperiencesHandler}
              >
                {!showMore && <BsArrowRight size={30} />}
                {showMore && <BsArrowLeft size={30} />}
              </button>
              <ExperienceScale
                onClick={showKeyHandler}
                showKeyState={showKey}
              />
            </React.Fragment>
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
