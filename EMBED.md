# Embedding the Tifo Portfolio in Squarespace

The app is a static site. Once deployed (e.g. to Vercel), embed it on a
Squarespace page with a **Code Block** containing an iframe.

## Basic embed

Add a Code Block where you want the portfolio and paste:

```html
<iframe
  id="tifo-portfolio"
  src="https://YOUR-DEPLOYMENT-URL.vercel.app/"
  style="width:100%; border:0; min-height:1200px;"
  title="Los Verdes ATX Tifo Portfolio"
  loading="lazy"
></iframe>
```

Replace `YOUR-DEPLOYMENT-URL` with the real URL.

## Auto-resizing + centered popups (recommended)

The app posts its content height to the parent so the iframe grows to fit (no
inner scrollbar). Because that makes the iframe very tall, the app also asks the
parent where it is currently scrolled, so the image popup (lightbox) can center
itself in the visitor's view instead of in the middle of the tall frame.

Paste this listener snippet **below** the iframe in the same Code Block. It
handles both messages:

```html
<script>
  (function () {
    var frame = document.getElementById("tifo-portfolio");

    function sendViewport() {
      if (!frame) return;
      var rect = frame.getBoundingClientRect();
      var viewH = window.innerHeight || document.documentElement.clientHeight;
      // The slice of the iframe currently visible, in the iframe's own
      // coordinates: how far its top is above the viewport, and how tall the
      // visible part is.
      var top = Math.max(0, -rect.top);
      var bottom = Math.min(rect.height, viewH - rect.top);
      var height = Math.max(0, bottom - top);
      frame.contentWindow.postMessage(
        { type: "tifo-portfolio:viewport", top: top, height: height },
        "*"
      );
    }

    window.addEventListener("message", function (event) {
      var data = event.data;
      if (!data) return;
      if (data.type === "tifo-portfolio:height" && frame) {
        frame.style.height = data.height + "px";
      } else if (data.type === "tifo-portfolio:request-viewport") {
        sendViewport();
      }
    });

    // Keep the popup tracking the visitor's scroll while it is open.
    window.addEventListener("scroll", sendViewport, { passive: true });
    window.addEventListener("resize", sendViewport);
  })();
</script>
```

> The app degrades gracefully: if the parent does not send viewport messages
> (e.g. an older embed snippet), the popup simply falls back to centering in the
> iframe as before.
