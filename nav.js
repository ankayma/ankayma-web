// Mobile nav: toggle the menu open/closed and close it after tapping a link.
document.addEventListener('click', function (e) {
  var btn = e.target.closest('.nav-toggle');
  if (btn) {
    var nav = btn.closest('nav');
    var open = nav.classList.toggle('open');
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    return;
  }
  var link = e.target.closest('nav.open ul a');
  if (link) link.closest('nav').classList.remove('open');
});
