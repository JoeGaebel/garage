# Garage Opener
Dynamic IP config: 
- https://gist.github.com/christopherbaek/333146d953c87b3667c59c4e6e250454
- https://www.namecheap.com/support/knowledgebase/article.aspx/595/11/how-do-i-enable-dynamic-dns-for-a-domain/
- ./ddclient.conf

Daemonising:
 - `pm2 start npm --name "nextjs" -- run dev` (only works with dev for some reason)

Level Shifting:
 - https://www.raspberrypi-spy.co.uk/2018/09/using-a-level-shifter-with-the-raspberry-pi-gpio/

Pins:
 - https://pinout.xyz/

Hardware:
 - [5V Relay](https://www.jaycar.com.au/arduino-compatible-5v-relay-board/p/XC4419?gclid=EAIaIQobChMI9ZitiICR-gIVl38rCh16oQiSEAQYASABEgKFwPD_BwE)
 - [Logic Level Shifter](https://www.jaycar.com.au/arduino-compatible-logic-level-converter-module/p/XC4486?pos=1&queryId=dce2c08d3daac5c042adf8eba504341f)