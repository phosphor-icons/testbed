import React, { useState, useMemo, useCallback } from "react";
import Dropzone from "react-dropzone";
import {
  IconContext,
  Android,
  ArrowBendDownLeft,
  ArrowUpRightCircle,
  Backspace,
  BatteryMedium,
  CalendarX,
  CaretRight,
  CheckCircle,
  Clock,
  Cloud,
  Cube,
  Envelope,
  EnvelopeSimple,
  FileText,
  FingerprintDense,
  Folder,
  FolderDip,
  FolderSimple,
  MagnifyingGlass,
  MapPin,
  Microphone,
  MinusCircle,
  NotePencil,
  NotesSixteenth,
  Pen,
  PencilLine,
  PlayCircle,
  PlusCircle,
  Prohibit,
  Smiley,
  SmileyMeh,
  SpeakerNone,
  SpeakerX,
  Star,
  Translate,
  Trash,
  TwoCircle,
  UserCircle,
  Warning,
  WifiMedium,
} from "phosphor-react";

import "./App.css";

const defaultIcons = [
  Android,
  ArrowBendDownLeft,
  ArrowUpRightCircle,
  Backspace,
  BatteryMedium,
  CalendarX,
  CaretRight,
  CheckCircle,
  Clock,
  Cloud,
  Cube,
  Envelope,
  EnvelopeSimple,
  FileText,
  FingerprintDense,
  Folder,
  FolderDip,
  FolderSimple,
  MagnifyingGlass,
  MapPin,
  Microphone,
  MinusCircle,
  NotePencil,
  NotesSixteenth,
  Pen,
  PencilLine,
  PlayCircle,
  PlusCircle,
  Prohibit,
  Smiley,
  SmileyMeh,
  SpeakerNone,
  SpeakerX,
  Star,
  Translate,
  Trash,
  TwoCircle,
  UserCircle,
  Warning,
  WifiMedium,
  Android,
  ArrowBendDownLeft,
  ArrowUpRightCircle,
  Backspace,
  BatteryMedium,
  CalendarX,
  CaretRight,
  CheckCircle,
  Clock,
  Cloud,
  Cube,
  Envelope,
  EnvelopeSimple,
  FileText,
  FingerprintDense,
  Folder,
  FolderDip,
  FolderSimple,
  MagnifyingGlass,
  MapPin,
  Microphone,
  MinusCircle,
  NotePencil,
  NotesSixteenth,
  Pen,
  PencilLine,
  PlayCircle,
  PlusCircle,
  Prohibit,
  Smiley,
  SmileyMeh,
  SpeakerNone,
  SpeakerX,
  Star,
  Translate,
  Trash,
  TwoCircle,
  UserCircle,
  Warning,
  WifiMedium,
];

type Weight = "thin" | "light" | "regular" | "bold" | "fill" | "duotone";

function App() {
  const [rand, setRand] = useState<number>(0);
  const [size, setSize] = useState<number>(32);
  const [weight, setWeight] = useState<Weight>("regular");
  const [testIconStrings, setTestIconStrings] = useState<string[]>([]);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    acceptedFiles.forEach((file) => {
      const reader = new FileReader();

      reader.onabort = () => console.log("file reading was aborted");
      reader.onerror = () => console.log("file reading has failed");
      reader.onload = () => {
        const binaryStr = reader.result as string;
        setTestIconStrings((existing) => [...existing, binaryStr]);
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
      <Icon key={index} className="icon" />
    ));
    if (testIconStrings.length) {
      testIconStrings.forEach((svgString, index) => {
        shuffled.push(
          <img
            key={defaultIcons.length * index + 100}
            height={size}
            width={size}
            src={"data:image/svg+xml," + encodeURIComponent(svgString)}
            alt=""
            className="icon"
          />,
          <img
            key={defaultIcons.length * index + 100 + 1}
            height={size}
            width={size}
            src={"data:image/svg+xml," + encodeURIComponent(svgString)}
            alt=""
            className="icon"
          />,
          <img
            key={defaultIcons.length * index + 100 + 2}
            height={size}
            width={size}
            src={"data:image/svg+xml," + encodeURIComponent(svgString)}
            alt=""
            className="icon"
          />,
          <img
            key={defaultIcons.length * index + 100 + 3}
            height={size}
            width={size}
            src={"data:image/svg+xml," + encodeURIComponent(svgString)}
            alt=""
            className="icon"
          />,
          <img
            key={defaultIcons.length * index + 100 + 4}
            height={size}
            width={size}
            src={"data:image/svg+xml," + encodeURIComponent(svgString)}
            alt=""
            className="icon"
          />,
          <img
            key={defaultIcons.length * index + 100 + 5}
            height={size}
            width={size}
            src={"data:image/svg+xml," + encodeURIComponent(svgString)}
            alt=""
            className="icon"
          />
        );
      });
    }
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * i);
      const temp = shuffled[i];
      shuffled[i] = shuffled[j];
      shuffled[j] = temp;
    }
    return shuffled;
  }, [size, testIconStrings, rand]);

  return (
    <div className="app">
      <h1>Phosphor Testbed</h1>
      <div className="stickymenu">
        <div className="stickyinputs">
          <textarea
            value={testIconStrings[0] ?? ""}
            onChange={(e) => {
              const {
                target: { value },
              } = e;
              setTestIconStrings((existing) => {
                const [, ...rest] = existing;
                return [value, ...rest];
              });
            }}
            onClick={(e) => e.currentTarget.select()}
          />
          <Dropzone multiple={true} accept="image/*" onDrop={onDrop}>
            {({ getRootProps, getInputProps }) => (
              <div className="dropzone" {...getRootProps()}>
                <input {...getInputProps()} />
                <p>
                  Drag 'n drop one or more SVGs here, or click to select files
                </p>
              </div>
            )}
          </Dropzone>
        </div>
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
        <input
          min={16}
          max={192}
          step={4}
          value={size}
          type="range"
          onChange={({ target: { value } }) => setSize(Number(value))}
        />
        {size}
        <button onClick={() => setRand(Math.random())}>Shuffle</button>
        <button onClick={() => setTestIconStrings([])}>Clear</button>
      </div>
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

      {testIconStrings.length ? (
        <>
          <div className="phone-container">
            <button className="test-button">
              <img
                height={24}
                width={24}
                src={
                  "data:image/svg+xml," + encodeURIComponent(testIconStrings[0])
                }
                alt=""
              />
              Download Icons
            </button>
            <button className="test-button">
              <Smiley size={24} weight={weight} />
              Download Icons
            </button>
          </div>
          <div className="phone-container">
            <button className="test-button medium">
              <img
                height={32}
                width={32}
                src={
                  "data:image/svg+xml," + encodeURIComponent(testIconStrings[0])
                }
                alt=""
              />
              Download Icons
            </button>
          </div>
          <div className="phone-container">
            <button className="test-button medium">
              <Smiley size={32} weight={weight} />
              Download Icons
            </button>
          </div>
          <div className="phone-container">
            <button className="test-button large">
              <img
                height={48}
                width={48}
                src={
                  "data:image/svg+xml," + encodeURIComponent(testIconStrings[0])
                }
                alt=""
              />
              Download Icons
            </button>
          </div>
          <div className="phone-container">
            <button className="test-button large">
              <Smiley size={48} weight={weight} />
              Download Icons
            </button>
          </div>
        </>
      ) : null}
    </div>
  );
}

export default App;
