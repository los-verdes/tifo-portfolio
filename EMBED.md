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

## Auto-resizing (recommended)

The app posts its content height to the parent page so the iframe can grow to
fit — no inner scrollbar. Add this listener snippet **below** the iframe in the
same Code Block:

```html
<script>
  window.addEventListener("message", function (event) {
    var data = event.data;
    if (data && data.type === "tifo-portfolio:height") {
      var frame = document.getElementById("tifo-portfolio");
      if (frame) {
        frame.style.height = data.height + "px";
      }
    }
  });
</script>
```

> Note: the lightbox (image popup) renders inside the iframe. With
> auto-resizing the iframe is tall, so when a visitor opens an image the page
> may need to scroll up to center it. If that feels off, remove the
> auto-resize script and keep a fixed `min-height` instead — the gallery will
> scroll inside the iframe and the lightbox will always be centered.
