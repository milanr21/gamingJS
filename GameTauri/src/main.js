import { appWindow } from "@tauri-apps/api/window";
import kaboom from "kaplay";

const k = kaboom({
  width: 1280,
  height: 720,
  letterbox: true,
  global: false,
  scale: 2,
});

k.loadSprite("kriby", "./kriby.png");
k.loadSprite("obstacles", "./obstacles.png");
k.loadSprite("background", "./background.png");
k.loadSprite("clouds", "./clouds.png");

k.loadSound("confirm", "./confirm.wav");
k.loadSound("hurt", "./hurt.wav");
k.loadSound("jump", "./jump.wav");

addEventListener("keydown", async (key) => {
  if (key.code === "p") {
    if (await appWindow.isFullscreen()) {
      await appWindow.setFullscreen(false);
    } else {
      await appWindow.setFullscreen(true);
    }
  }
});
