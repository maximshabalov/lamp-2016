﻿
Задания
1. В каталоге solutions создать подкаталог со своим именем и фамилией (англ.), всю дальнейшую работу вести в нем, не забывая делать git commit и git push

2. Установить node и npm 
2.1. node
  https://nodejs.org -> Download -> All download options -> win-x64 -> node.exe, node.lib
                                                         -> win-x86 -> node.exe, node.lib
                                                                                                                  
2.2. Запуск                                                       
Задания и примеры размещаются в каталоге `assignments/`
```
$ node ex1_file.js
$ node ex2_freq_begin.js
```

3. Сгенерировать файл формата `.raw` с частотой дискретизации 8000Гц и звуком частотой 425 Гц
 Посмотреть спектр (Audacity -> Analyze -> Plot Specturm...)
 Изменить частоту дискретизации на 44100Гц, посмотреть спектр еще раз.
 Что видно, чем объясняются отличия.
 
4. Сгенерировать файл с частотами `DTMF` '12345' (либо другими, на выбор), длительностью 0.5с каждая.

5. Сгенерировать файл с любой последовательностью музыкальных нот

================================================================================

ПРИМЕЧАНИЕ
npm используется для установки дополнительных модулей:

Установка npm
https://nodejs.org/dist/npm/ -> npm-1.4.9.zip
  
Инициализировать package.json
`$ npm init`

Установка модуля
`$ npm install <имя_модуля> --save`


