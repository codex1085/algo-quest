import { useEffect } from 'react';
import Phaser from 'phaser';

export default function PhaserGame() {
  useEffect(() => {
    const config = {
      type: Phaser.AUTO,
      width: 800,
      height: 600,
      parent: 'phaser-container',
      scene: {
        preload: function () {
          this.load.image('logo', 'https://labs.phaser.io/assets/sprites/phaser3-logo.png');
        },
        create: function () {
          this.add.image(400, 300, 'logo');
        }
      }
    };

    new Phaser.Game(config);
  }, []);

  return <div id="phaser-container" />;
}
