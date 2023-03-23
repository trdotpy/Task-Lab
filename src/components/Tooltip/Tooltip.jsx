export default function Tooltip({ children }) {
  return (
    <div className="hs-tooltip">
      <button type="button" className="hs-tooltip-toggle">
        {children}
        <span
          className="hs-tooltip-content invisible absolute z-10 inline-block rounded-md bg-jet-500 py-1 px-2 text-xs font-medium text-white opacity-0 shadow-sm transition-opacity hs-tooltip-shown:visible hs-tooltip-shown:opacity-100"
          role="tooltip"
        >
          In Development
        </span>
      </button>
    </div>
  );
}
