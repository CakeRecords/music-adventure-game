<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<html>
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
  <meta http-equiv="Content-Style-Type" content="text/css">
  <title></title>
  <meta name="Generator" content="Cocoa HTML Writer">
  <meta name="CocoaVersion" content="2487.7">
  <style type="text/css">
    p.p1 {margin: 0.0px 0.0px 0.0px 0.0px; font: 12.0px Helvetica}
    p.p2 {margin: 0.0px 0.0px 0.0px 0.0px; font: 12.0px Helvetica; min-height: 14.0px}
  </style>
</head>
<body>
<p class="p1">const config = {</p>
<p class="p1"><span class="Apple-converted-space">    </span>type: Phaser.AUTO,</p>
<p class="p1"><span class="Apple-converted-space">    </span>width: 800,</p>
<p class="p1"><span class="Apple-converted-space">    </span>height: 600,</p>
<p class="p1"><span class="Apple-converted-space">    </span>physics: { default: 'arcade' },</p>
<p class="p1"><span class="Apple-converted-space">    </span>scene: {</p>
<p class="p1"><span class="Apple-converted-space">        </span>preload: function () {</p>
<p class="p1"><span class="Apple-converted-space">            </span>this.load.image('background', 'assets/background.png');</p>
<p class="p1"><span class="Apple-converted-space">            </span>this.load.spritesheet('player', 'assets/player_sprite.png', { frameWidth: 32, frameHeight: 32 });</p>
<p class="p1"><span class="Apple-converted-space">            </span>this.load.image('npc', 'assets/npc.png');</p>
<p class="p1"><span class="Apple-converted-space">        </span>},</p>
<p class="p1"><span class="Apple-converted-space">        </span>create: function () {</p>
<p class="p1"><span class="Apple-converted-space">            </span>this.add.image(400, 300, 'background');</p>
<p class="p2"><span class="Apple-converted-space">            </span></p>
<p class="p1"><span class="Apple-converted-space">            </span>this.player = this.physics.add.sprite(400, 300, 'player');</p>
<p class="p1"><span class="Apple-converted-space">            </span>this.npc = this.physics.add.staticSprite(200, 300, 'npc');</p>
<p class="p2"><span class="Apple-converted-space">            </span></p>
<p class="p1"><span class="Apple-converted-space">            </span>this.cursors = this.input.keyboard.createCursorKeys();</p>
<p class="p2"><span class="Apple-converted-space">            </span></p>
<p class="p1"><span class="Apple-converted-space">            </span>this.physics.add.collider(this.player, this.npc, () =&gt; {</p>
<p class="p1"><span class="Apple-converted-space">                </span>this.showDialogue("Welcome to the adventure! Find your first instrument.");</p>
<p class="p1"><span class="Apple-converted-space">            </span>});</p>
<p class="p1"><span class="Apple-converted-space">        </span>},</p>
<p class="p1"><span class="Apple-converted-space">        </span>update: function () {</p>
<p class="p1"><span class="Apple-converted-space">            </span>this.player.setVelocity(0);</p>
<p class="p1"><span class="Apple-converted-space">            </span>if (this.cursors.left.isDown) {</p>
<p class="p1"><span class="Apple-converted-space">                </span>this.player.setVelocityX(-160);</p>
<p class="p1"><span class="Apple-converted-space">            </span>} else if (this.cursors.right.isDown) {</p>
<p class="p1"><span class="Apple-converted-space">                </span>this.player.setVelocityX(160);</p>
<p class="p1"><span class="Apple-converted-space">            </span>}</p>
<p class="p1"><span class="Apple-converted-space">            </span>if (this.cursors.up.isDown) {</p>
<p class="p1"><span class="Apple-converted-space">                </span>this.player.setVelocityY(-160);</p>
<p class="p1"><span class="Apple-converted-space">            </span>} else if (this.cursors.down.isDown) {</p>
<p class="p1"><span class="Apple-converted-space">                </span>this.player.setVelocityY(160);</p>
<p class="p1"><span class="Apple-converted-space">            </span>}</p>
<p class="p1"><span class="Apple-converted-space">        </span>},</p>
<p class="p1"><span class="Apple-converted-space">        </span>showDialogue: function (text) {</p>
<p class="p1"><span class="Apple-converted-space">            </span>alert(text);</p>
<p class="p1"><span class="Apple-converted-space">        </span>}</p>
<p class="p1"><span class="Apple-converted-space">    </span>}</p>
<p class="p1">};</p>
<p class="p2"><br></p>
<p class="p1">const game = new Phaser.Game(config);</p>
</body>
</html>
