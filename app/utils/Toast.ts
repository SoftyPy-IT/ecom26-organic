export function showToast({
  message,
  type = "success",
  position = "top",
  alignment = "right",
  duration = 3000,
}: {
  message: string;
  type?: "success" | "error" | "warning" | "info";
  position?: "top" | "bottom";
  alignment?: "left" | "center" | "right";
  duration?: number;
}) {
  // Create container if it doesn't exist
  let container = document.getElementById("toast-container");

  if (!container) {
    container = document.createElement("div");
    container.id = "toast-container";
    container.style.position = "fixed";
    container.style.display = "flex";
    container.style.flexDirection = "column";
    container.style.gap = "8px";
    container.style.zIndex = "9999";
    container.style.maxWidth = "90vw";

    // Position
    container.style[position] = "20px";

    if (alignment === "left") container.style.left = "20px";
    if (alignment === "right") container.style.right = "20px";
    if (alignment === "center") {
      container.style.left = "50%";
      container.style.transform = "translateX(-50%)";
    }

    document.body.appendChild(container);
  }

  // Type styles
  const typeStyles: Record<string, { bg: string; icon: string }> = {
    success: { bg: "#d1fae5", icon: "✓" }, // green
    error: { bg: "#fee2e2", icon: "✕" },   // red
    warning: { bg: "#fef3c7", icon: "!" }, // yellow
    info: { bg: "#dbeafe", icon: "i" },    // blue
  };

  const { bg, icon } = typeStyles[type];

  // Create toast element
  const toast = document.createElement("div");
  toast.style.background = bg;
  toast.style.border = "1px solid rgba(0,0,0,0.1)";
  toast.style.padding = "12px 16px";
  toast.style.borderRadius = "8px";
  toast.style.display = "flex";
  toast.style.alignItems = "center";
  toast.style.gap = "12px";
  toast.style.boxShadow = "0 4px 12px rgba(0,0,0,0.08)";
  toast.style.transform = "translateY(-10px) scale(0.95)";
  toast.style.opacity = "0";
  toast.style.transition = "all 0.25s ease";

  toast.innerHTML = `
    <div style="font-weight:bold; font-size:18px;">${icon}</div>
    <div style="flex:1; font-size:14px; color:#111;">${message}</div>
    <button style="background:none;border:none;color:#888;font-size:14px;cursor:pointer;">✕</button>
  `;

  // Close button
  const btn = toast.querySelector("button");
  btn?.addEventListener("click", () => {
    toast.style.opacity = "0";
    toast.style.transform = "translateY(-10px) scale(0.95)";
    setTimeout(() => toast.remove(), 200);
  });

  container.appendChild(toast);

  // Animate in
  requestAnimationFrame(() => {
    toast.style.opacity = "1";
    toast.style.transform = "translateY(0) scale(1)";
  });

  // Auto-remove after duration
  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateY(-10px) scale(0.95)";
    setTimeout(() => toast.remove(), 200);
  }, duration);
}
