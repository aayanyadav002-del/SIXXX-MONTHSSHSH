# 6 Months of Us — Digital Scrapbook

## Files
- `index.html` — website structure
- `style.css` — scrapbook styling and animations
- `script.js` — pages, navigation, photos, music controls

## Add your media
Put your photos in `images/` using the filenames referenced in `script.js`:
`photo1.jpg`, `photo2.jpg`, etc.

Put your song at:
`music/our-song.mp3`

## Customize
Open `script.js` and edit the `CONFIG` object near the top. You can change:
- girlfriendName
- nickname
- anniversaryLabel
- every message
- every photo path
- timeline entries
- final letter

## Run
You can open `index.html` directly for the scrapbook UI. For reliable local audio/file behavior, use a small local server (for example VS Code Live Server).

For deployment, upload the whole folder to GitHub Pages, Vercel, Netlify, etc.


## Mixed Media: JPG / PNG / GIF / MP4

The scrapbook supports normal images, animated GIFs, and video scrapbook frames.

### Folders
- `images/` → JPG, JPEG, PNG, GIF, and video poster images
- `videos/` → MP4 memory videos

### Easy `script.js` configuration

Image:
```js
{type:"image", src:"images/photo.jpg", caption:"Our favorite day"}
```

GIF:
```js
{type:"gif", src:"images/cute.gif", caption:"😭❤️"}
```

Video:
```js
{
  type:"video",
  src:"videos/memory1.mp4",
  poster:"images/memory1-poster.jpg",
  caption:"One of my favorite memories."
}
```

For collage/photo-wall pages, use `media:[ ... ]` instead of `photos:[ ... ]`.

For a featured page, use `media:{...}` instead of `photo:"..."`.

Existing strings such as `"images/photo1.jpg"` still work.

### Video behavior
- Videos use native browser controls.
- Videos do not autoplay.
- Videos automatically pause when you turn to another scrapbook page.
- H.264 video + AAC audio inside an MP4 is recommended for broad browser compatibility.
