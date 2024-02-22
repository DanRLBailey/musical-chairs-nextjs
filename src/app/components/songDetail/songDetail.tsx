import { useState } from "react";
import styles from "./songDetail.module.scss";
import globalStyles from "../../Index.module.scss";
import { Song } from "../../types/songTypes";
import { Tooltip } from "../tooltip/tooltip";
import { formatSeconds } from "../chordPill/chordPill";
import UnfoldLessIcon from "@mui/icons-material/UnfoldLess";
import KeyIcon from "@mui/icons-material/Key";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import ScheduleIcon from "@mui/icons-material/Schedule";

interface SongDetailProps {
  song: Song;
}

export const SongDetail = (props: SongDetailProps) => {
  const [hovering, setHovering] = useState<string>("");

  const getDifficulty = () => {
    switch (props.song.difficulty) {
      case 1:
        return "Intermediate";
      case 2:
        return "Expert";
      case 0:
      default:
        return "Beginner";
    }
  };

  return (
    <div className={styles.songDetailContainer}>
      <div className={styles.header}>
        <div className={styles.name}>
          <div>
            <span className={globalStyles.heading}>{props.song.name}</span>
            <div
              className={styles.difficulty}
              onMouseEnter={() => setHovering("difficulty")}
              onMouseLeave={() => setHovering("")}
            >
              {props.song.difficulty >= 0 && <span></span>}
              {props.song.difficulty >= 1 && <span></span>}
              {props.song.difficulty >= 2 && <span></span>}
              <Tooltip hovering={hovering == "difficulty"}>
                {getDifficulty()}
              </Tooltip>
            </div>
          </div>
          <span className={globalStyles.subheading}>{props.song.artist}</span>
        </div>
      </div>
      <div className={styles.footer}>
        <div
          onMouseEnter={() => setHovering("capo")}
          onMouseLeave={() => setHovering("")}
        >
          <UnfoldLessIcon />
          <span>{props.song.capo}</span>
          <Tooltip hovering={hovering == "capo"}>
            <>Capo</>
          </Tooltip>
        </div>
        <div
          onMouseEnter={() => setHovering("key")}
          onMouseLeave={() => setHovering("")}
        >
          <KeyIcon />
          <span>{props.song.key}</span>
          <Tooltip hovering={hovering == "key"}>
            <>Key</>
          </Tooltip>
        </div>
        <div
          onMouseEnter={() => setHovering("tuning")}
          onMouseLeave={() => setHovering("")}
        >
          <MusicNoteIcon />
          <span>{props.song.tuning}</span>
          <Tooltip hovering={hovering == "tuning"}>
            <>Tuning</>
          </Tooltip>
        </div>
        <div
          onMouseEnter={() => setHovering("duration")}
          onMouseLeave={() => setHovering("")}
        >
          <ScheduleIcon />
          <span>{formatSeconds(props.song.duration, false)}</span>
          <Tooltip hovering={hovering == "duration"}>
            <>Duration</>
          </Tooltip>
        </div>
      </div>
    </div>
  );
};
