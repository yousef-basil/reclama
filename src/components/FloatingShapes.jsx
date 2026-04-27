/**
 * FloatingShapes — Pure CSS/SVG animated background
 * Replaces heavy Three.js Canvas with lightweight CSS animations
 * Performance: ~0KB JS vs ~800KB (Three.js)
 */
export default function FloatingShapes() {
  return (
    <div className="floating-shapes-container">
      {/* Animated grid */}
      <div className="shapes-grid" />

      {/* Floating orbs */}
      <div className="shape-orb orb-1" />
      <div className="shape-orb orb-2" />
      <div className="shape-orb orb-3" />
      <div className="shape-orb orb-4" />

      {/* Geometric shapes */}
      <div className="shape-ring ring-1">
        <div className="ring-inner" />
      </div>
      <div className="shape-ring ring-2">
        <div className="ring-inner" />
      </div>

      {/* Floating crosses */}
      <div className="shape-cross cross-1">+</div>
      <div className="shape-cross cross-2">+</div>
      <div className="shape-cross cross-3">+</div>
    </div>
  );
}
