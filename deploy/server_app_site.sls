code4hkgrp:
  group.present:
    - system: True

code4hksite:
  user.present:
    - fullname: Code4HK Site Fid
    - shell: /bin/bash
    - home: /home/code4hksite
    - uid: 1000
    - groups:
      - code4hkgrp
    - require:
      - group: code4hkgrp 

