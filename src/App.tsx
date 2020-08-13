import React, { useState, useMemo, useCallback } from "react";
import Dropzone from "react-dropzone";
import {
  IconContext,
  ArrowUpRightCircle,
  Backspace,
  BatteryHalf,
  BookClosed,
  CalendarX,
  CheckCircle,
  Clock,
  Cloud,
  Copy,
  Cube,
  DocumentText,
  Droid,
  Envelope,
  EnvelopeAlt,
  Folder,
  FolderDip,
  FolderMinimal,
  Heart,
  Horse,
  Microphone,
  MinusCircle,
  MusicNotesSixteenth,
  PenNib,
  PencilClip,
  PencilLine,
  Pin,
  PlayCircle,
  PlusCircle,
  Prohibit,
  Search,
  Smiley,
  SmileyMeh,
  SpeakerOff,
  Star,
  Trash,
  TwoCircle,
  UserCircle,
  WarningTriangle,
  WifiMedium,
} from "phosphor-react";

import "./App.css";

const defaultIcons = [
  ArrowUpRightCircle,
  Backspace,
  BatteryHalf,
  BookClosed,
  CalendarX,
  CheckCircle,
  Clock,
  Cloud,
  Copy,
  Cube,
  DocumentText,
  Droid,
  Envelope,
  EnvelopeAlt,
  Folder,
  FolderDip,
  FolderMinimal,
  Heart,
  Horse,
  Microphone,
  MinusCircle,
  MusicNotesSixteenth,
  PenNib,
  PencilClip,
  PencilLine,
  Pin,
  PlayCircle,
  PlusCircle,
  Prohibit,
  Search,
  Smiley,
  SmileyMeh,
  SpeakerOff,
  Star,
  Trash,
  TwoCircle,
  UserCircle,
  WarningTriangle,
  WifiMedium,
  ArrowUpRightCircle,
  Backspace,
  BatteryHalf,
  BookClosed,
  CalendarX,
  CheckCircle,
  Clock,
  Cloud,
  Copy,
  Cube,
  DocumentText,
  Droid,
  Envelope,
  EnvelopeAlt,
  Folder,
  FolderDip,
  FolderMinimal,
  Heart,
  Horse,
  Microphone,
  MinusCircle,
  MusicNotesSixteenth,
  PenNib,
  PencilClip,
  PencilLine,
  Pin,
  PlayCircle,
  PlusCircle,
  Prohibit,
  Search,
  Smiley,
  SmileyMeh,
  SpeakerOff,
  Star,
  Trash,
  TwoCircle,
  UserCircle,
  WarningTriangle,
  WifiMedium,
];

type Weight = "thin" | "light" | "regular" | "bold" | "fill" | "duotone";

function App() {
  const [rand, setRand] = useState<number>(0);
  const [size, setSize] = useState<number>(32);
  const [weight, setWeight] = useState<Weight>("regular");
  const [testIconString, setTestIconString] = useState<string>("");

  const onDrop = useCallback((acceptedFiles: File[]) => {
    acceptedFiles.forEach((file) => {
      const reader = new FileReader();

      reader.onabort = () => console.log("file reading was aborted");
      reader.onerror = () => console.log("file reading has failed");
      reader.onload = () => {
        const binaryStr = reader.result as string;
        setTestIconString(binaryStr);
        const suffix = file.name.split(".svg")[0].split("-").slice(-1)[0];
        switch (suffix) {
          case "thin":
          case "light":
          case "bold":
          case "fill":
            setWeight(suffix);
            break;
          case "duo":
          case "duotone":
            setWeight("duotone");
            break;
          default:
            setWeight("regular");
            break;
        }
      };
      reader.readAsText(file, "utf8");
    });
  }, []);

  const shuffled = useMemo(() => {
    const shuffled: React.ReactNode[] = defaultIcons.map((Icon, index) => (
      <Icon key={index} />
    ));
    if (testIconString)
      shuffled.push(
        <img
          key={defaultIcons.length}
          height={size}
          width={size}
          src={"data:image/svg+xml," + encodeURIComponent(testIconString)}
        />,
        <img
          key={defaultIcons.length + 1}
          height={size}
          width={size}
          src={"data:image/svg+xml," + encodeURIComponent(testIconString)}
        />,
        <img
          key={defaultIcons.length + 2}
          height={size}
          width={size}
          src={"data:image/svg+xml," + encodeURIComponent(testIconString)}
        />,
        <img
          key={defaultIcons.length + 3}
          height={size}
          width={size}
          src={"data:image/svg+xml," + encodeURIComponent(testIconString)}
        />,
        <img
          key={defaultIcons.length + 4}
          height={size}
          width={size}
          src={"data:image/svg+xml," + encodeURIComponent(testIconString)}
        />,
        <img
          key={defaultIcons.length + 5}
          height={size}
          width={size}
          src={"data:image/svg+xml," + encodeURIComponent(testIconString)}
        />
      );
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * i);
      const temp = shuffled[i];
      shuffled[i] = shuffled[j];
      shuffled[j] = temp;
    }
    return shuffled;
  }, [size, testIconString, rand]);

  return (
    <div className="app">
      <h1>Phosphor Testbed</h1>
      <Dropzone multiple={false} accept="image/*" onDrop={onDrop}>
        {({ getRootProps, getInputProps }) => (
          <div className="dropzone" {...getRootProps()}>
            <input {...getInputProps()} />
            <p>Drag 'n drop an SVG here, or click to select a file</p>
          </div>
        )}
      </Dropzone>
      <button onClick={() => setRand(Math.random())}>Shuffle</button>
      <input
        min={16}
        max={192}
        value={size}
        type="range"
        onChange={({ target: { value } }) => setSize(Number(value))}
      />
      <select
        value={weight}
        onChange={({ target: { value } }) => setWeight(value as Weight)}
      >
        <option value="thin">Thin</option>
        <option value="light">Light</option>
        <option value="regular">Regular</option>
        <option value="bold">Bold</option>
        <option value="fill">Fill</option>
        <option value="duotone">Duotone</option>
      </select>
      <div className="phone-container">
        <div className="phone-chrome">
          <IconContext.Provider
            value={{
              color: "black",
              size: size,
              weight: weight,
              mirrored: false,
            }}
          >
            {shuffled}
          </IconContext.Provider>
        </div>
      </div>

      {testIconString && (
        <>
          <div className="phone-container">
            <button className="test-button">
              <img
                height={24}
                width={24}
                src={"data:image/svg+xml," + encodeURIComponent(testIconString)}
              />
              Download Icons
            </button>
            <button className="test-button">
              <Smiley size={24} />
              Download Icons
            </button>
          </div>
          <div className="phone-container">
            <button className="test-button medium">
              <img
                height={32}
                width={32}
                src={"data:image/svg+xml," + encodeURIComponent(testIconString)}
              />
              Download Icons
            </button>
          </div>
          <div className="phone-container">
            <button className="test-button medium">
              <Smiley size={32} />
              Download Icons
            </button>
          </div>
          <div className="phone-container">
            <button className="test-button large">
              <img
                height={48}
                width={48}
                src={"data:image/svg+xml," + encodeURIComponent(testIconString)}
              />
              Download Icons
            </button>
          </div>
          <div className="phone-container">
            <button className="test-button large">
              <Smiley size={48} />
              Download Icons
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
