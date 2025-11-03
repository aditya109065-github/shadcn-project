import { useState, useEffect, useRef } from "react";
import { Spinner } from "@/components/ui/spinner"
export default function AssessmentContent() {
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [currentSuggestionIndex, setCurrentSuggestionIndex] = useState(0);
  const [animationKey, setAnimationKey] = useState(0);
  const [textareaValue, setTextareaValue] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const [typedText, setTypedText] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [isUploading, setIsUploading] = useState(false);
  const dropdownRef = useRef(null);
  const fileInputRef = useRef(null);
  const suggestions = [
    "Create a coding assessment for a backend developer with 2-4 years of experience in Node.js and MongoDB. Include 1 real-world problem and 3 MCQs.",
    "Create an advanced-level assessment for a Java Developer skilled in core java and Oops with 5+ years of experience.",
    "Generate a marketing role assessment for a candidate with 2+ years experience in SEO and campaign analytics.",
    "Create an aptitude and reasoning test for entry-level operations executive positions",
  ];
  const keywords = [
    "Skills",
    "Job Role",
    "Years of experience",
    "Difficulty Level",
    "Question Type",
  ];
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowSuggestions(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    let index = 0;
    let intervalId;
    let restartTimeout;

    const currentSuggestion = suggestions[currentSuggestionIndex];

    if (isTyping && !textareaValue && !showSuggestions) {
      setTypedText("");

      intervalId = setInterval(() => {
        if (index < currentSuggestion.length) {
          setTypedText(currentSuggestion.substring(0, index + 1));
          index++;
        } else {
          clearInterval(intervalId);
          restartTimeout = setTimeout(() => {
            setCurrentSuggestionIndex(
              (prev) => (prev + 1) % suggestions.length
            );
            setAnimationKey((prev) => prev + 1);
          }, 1000);
        }
      }, 30);
    }

    return () => {
      if (intervalId) clearInterval(intervalId);
      if (restartTimeout) clearTimeout(restartTimeout);
    };
  }, [
    isTyping,
    textareaValue,
    showSuggestions,
    animationKey,
    currentSuggestionIndex,
  ]);

  const handleChange = (e) => {
    setIsTyping(false);
    setTypedText("");
    setTextareaValue(e.target.value);
  };

  const handleFocus = () => {
    setIsTyping(false);
    setTypedText("");
    setShowSuggestions(true);
  };

  const handleSuggestionClick = (suggestion) => {
    setIsTyping(false);
    setTypedText("");
    setTextareaValue(suggestion);
    setShowSuggestions(false);
  };

  const handleFileUploadClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      // Validate file type
      const allowedTypes = [
        'application/pdf',
        'application/msword',
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
        'text/plain'
      ];

      if (!allowedTypes.includes(file.type)) {
        alert('Please select a valid file type (PDF, DOC, DOCX, or TXT)');
        return;
      }

      // Validate file size (max 10MB)
      const maxSize = 10 * 1024 * 1024; // 10MB in bytes
      if (file.size > maxSize) {
        alert('File size must be less than 10MB');
        return;
      }

      setSelectedFile(file);
      setIsUploading(true);

      setTimeout(() => {
        setIsUploading(false);
      }, 2000);

      console.log('Selected file:', file.name);
    }
  };

  return (
    <div className="flex flex-1 flex-col pt-[100px] md:max-w-[752px] sm:max-w-[550px] p-4 mx-auto">
      <div className="flex flex-col gap-[64px]">
        {/* Page Title */}
        <div className="text-center">
          <h1 className="text-[var(--greyscale-text-primary)] text-[24px] font-[var(--headings-h3-weight-regular)] leading-[var(--headings-h3-line-height-regular)] mb-2">
            Assess Candidates More Effectively with{" "}
            <span className="text-[var(--surface-default-primary)] inline-flex items-center gap-1">
              AI
              <img src="/Icon.svg" alt="AI Icon" className="w-6 h-6 inline" />
            </span>
          </h1>
        </div>

        <div>
          {/* Content Card */}
          <div className="flex justify-between items-center">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 border border-b-0 border-[var(--greyscale-border-default)] bg-[var(--surface-subtle-primary)] text-[var(--surface-darker-primary)] font-medium text-sm rounded-tl-lg rounded-tr-lg">
              <img
                src="/brain.svg"
                alt="Brain Icon"
                className="w-[var(--icons-small-size)] h-[var(--icons-small-size)]"
              />
              Describe the job role you're hiring for
            </span>
            <button className="cursor-pointer flex items-center gap-1 p-2 text-[var(--greyscale-text-tertiary)] hover:text-gray-700 text-sm font-normal leading-[var(--typography-line-height-16-rem)]">
              <img
                src="/settings.svg"
                alt="Settings Icon"
                className="w-[var(--icons-small-size)] h-[var(--icons-small-size)] inline"
              />
              Create Manually
            </button>
          </div>

          <div className="relative flex flex-col justify-between  min-h-[200px] h-[200px] border border-[var(--greyscale-border-default)] shrink-0 rounded-tl-none rounded-tr-lg rounded-b-lg bg-[var(--colors-base-white)] shadow-[0_6px_14px_-6px_rgba(7,6,20,0.12),0_10px_32px_-4px_rgba(7,6,20,0.10)]">
            <div className="flex flex-1 px-6 pt-6 pb-3 gap-1">
              <img
                src="/star.svg"
                alt="AI Icon"
                className="w-[24px] h-[24px]"
              />
              <textarea
                className={`${
                  !textareaValue
                    ? "text-[var(--greyscale-text-tertiary)]"
                    : "text-[var(--greyscale-text-secondary)]"
                } w-full rounded-lg focus:outline-none resize-none rounded-tl-none rounded-bl-none text-sm`}
                placeholder={!isTyping && !textareaValue ? "" : ""}
                value={isTyping ? typedText : textareaValue}
                onChange={handleChange}
                onFocus={handleFocus}
                // rows={showSuggestions ? 1 : 6}
              />
            </div>

            {/* Dropdown Suggestions */}
            {showSuggestions && !textareaValue && (
              <div
                ref={dropdownRef}
                className="absolute top-[60px] left-0 right-0 max-h-[280px] overflow-y-auto bg-white border-t border-[var(--greyscale-border-default)] z-10"
              >
                {suggestions.map((suggestion, index) => (
                  <button
                    key={index}
                    onClick={() => handleSuggestionClick(suggestion)}
                    className=" cursor-pointer font-normal w-full p-3 text-left text-[var(--greyscale-text-secondary)] hover:bg-gray-50 border-[var(--greyscale-border-default)] last:border-b-0 text-sm leading-relaxed"
                  >
                    {suggestion}
                  </button>
                ))}
              </div>
            )}

            <div className="flex items-center justify-between p-4 border-t border-[var(--greyscale-border-default)]">
              <div className="flex items-center gap-2">
                <button
                  onClick={handleFileUploadClick}
                  className="cursor-pointer bg-[var(--greyscale-surface-light)] hover:text-[var(--greyscale-text-primary)] hover:bg-[var(--greyscale-surface-default)] px-4 py-2 border-gray-300 rounded-full border-radius-lg text-gray-700 flex items-center gap-1 font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isUploading ? (
                    <>
                      <Spinner className="size-4" />
                      <span className="text-[var(--greyscale-text-secondary)] text-sm font-medium truncate max-w-[120px]">
                        {selectedFile?.name}
                      </span>
                    </>
                  ) : (
                    <>
                      <img
                        src="/upload.svg"
                        alt="Upload Icon"
                        className="w-[var(--icons-small-size)] h-[var(--icons-small-size)]"
                      />
                      <span className="text-[var(--greyscale-text-secondary)] text-sm">
                        Upload JD
                      </span>
                    </>
                  )}
                </button>
                {selectedFile && !isUploading && (
                  <span className="text-sm text-[var(--greyscale-text-secondary)] truncate max-w-[150px]">
                    {selectedFile.name}
                  </span>
                )}
              </div>
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleFileChange}
                accept=".pdf,.doc,.docx,.txt"
                className="hidden"
              />
              <button className={`p-2 ${!textareaValue ? 'bg-[var(--greyscale-surface-light)]' : 'bg-[var(--surface-default-primary)]'} hover:bg-[var(--greyscale-surface-default)] rounded-full`}>
                <img
                  src={!textareaValue ? "/send.svg" : "/send-white.svg"}
                  alt="Send Icon"
                  className="cursor-pointer w-[var(--icons-small-size)] h-[var(--icons-small-size)]"
                />
              </button>
            </div>
          </div>

          {/* Tabs/Badges Section */}
          <div className="flex flex-1 gap-2 flex-wrap pt-4">
            {keywords.map((tab, index) => {
              const isActive = index < 3;
              return (
                <span
                  key={tab}
                  className={`${
                    isActive
                      ? " border bg-[var(--surface-subtle-success)] text-[var(--surface-darker-success)] border-[var(--border-default-success)]"
                      : "opacity-50"
                  } flex items-center gap-1 px-4 py-2 font-medium rounded-full text-sm text-[var(--greyscale-text-secondary)] bg-[var(--greyscale-surface-light)] cursor-pointer`}
                >
                  <img
                    src={`/tick-circle${isActive ? "-green" : ""}.svg`}
                    alt="AI Icon"
                    className="w-[var(--icons-small-size)] h-[var(--icons-small-size)]"
                  />
                  <span
                    className={`${
                      isActive ? "text-[var(--text-label-success)]" : ""
                    }`}
                  >
                    {tab}
                  </span>
                </span>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
