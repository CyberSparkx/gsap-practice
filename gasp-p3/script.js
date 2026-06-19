gsap.registerPlugin(Draggable, InertiaPlugin);

Draggable.create(".drag1", {
  type: "rotation",
  inertia: true
});

Draggable.create(".drag2", {
  inertia: true
});
