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
  // Create container if not exists
  let container = document.getElementById("toast-container");

  if (!container) {
    container = document.createElement("div");
    container.id = "toast-container";
    container.className = "toast-container";

    container.style[position] = "20px";

    if (alignment === "left") container.style.left = "20px";
    if (alignment === "right") container.style.right = "20px";
    if (alignment === "center") {
      container.style.left = "50%";
      container.style.transform = "translateX(-50%)";
    }

    document.body.appendChild(container);
  }

  const toast = document.createElement("div");
  toast.className = "toast-card";

  const typeStyles: Record<string, { color: string; icon: string }> = {
    success: { color: "text-green-600", icon: "✓" },
    error: { color: "text-red-600", icon: "✕" },
    warning: { color: "text-yellow-500", icon: "!" },
    info: { color: "text-blue-600", icon: "i" },
  };

  const { color, icon } = typeStyles[type];

  toast.innerHTML = `
    <div class="${color} font-bold text-lg">${icon}</div>
    <div class="flex-1">
      <p class="text-sm text-gray-800">${message}</p>
    </div>
    <button class="text-gray-400 hover:text-gray-600 text-sm">✕</button>
  `;

  // Close button
  toast.querySelector("button")?.addEventListener("click", () => {
    toast.remove();
  });

  container.appendChild(toast);

  setTimeout(() => {
    toast.remove();
  }, duration);
}
