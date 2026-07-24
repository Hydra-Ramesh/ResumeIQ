export function LoadingFallback() {
  return (
    <div className="min-h-screen bg-transparent p-8 lg:p-12 w-full max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-12 animate-pulse">
        <div>
          <div className="h-10 w-48 bg-muted rounded mb-3"></div>
          <div className="h-4 w-64 bg-muted rounded"></div>
        </div>
        <div className="flex gap-3">
          <div className="h-12 w-32 bg-muted rounded-xl hidden sm:block"></div>
          <div className="h-12 w-32 bg-muted rounded-xl hidden sm:block"></div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="h-48 rounded-2xl bg-muted animate-pulse border border-border"
          />
        ))}
      </div>
    </div>
  );
}
