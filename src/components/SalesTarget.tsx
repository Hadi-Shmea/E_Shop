"use client";

type SalesTargetProps = {
  current: number;
  target: number;
};

export function SalesTarget({ current, target }: SalesTargetProps) {
  const progress = (current / target) * 100;

  return (
    <div className="bg-card p-6 rounded-xl shadow w-full ">
      <h2 className="font-semibold text-foreground">Sales Target</h2>

      {/* Stats row */}
      <div className="flex justify-between text-sm text-muted-foreground mt-2">
        <p>
          In Progress <br />
          <span className="font-bold text-black text-foreground">
            ${current.toLocaleString()}
          </span>
        </p>
        <p>
          Sales Target <br />
          <span className="font-bold text-black text-foreground">
            ${target.toLocaleString()}
          </span>
        </p>
      </div>

      {/* Progress bar */}
      <div className="relative mt-4 h-3 bg-gray-200 rounded-full overflow-hidden ">
        <div
          className="absolute top-0 left-0 h-3 bg-blue-500"
          style={{ width: `${progress}%` }}
        />
        <div
          className="absolute top-1/2 -translate-y-1/2 w-5 h-5 bg-gray-400 border-2 border-white rounded-full"
          style={{ left: `${progress}%` }}
        />
      </div>
    </div>
  );
}
