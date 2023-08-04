### boxData.js
このファイルは、各boxのデータを生成します。各boxデータには以下の情報が含まれています。

- target: boxが表示される対象の要素のセレクタ（例: #btn1）
- width: boxの幅（ランダムに100から300までの値）
- height: boxの高さ（ランダムに100から300までの値）
- background: boxの背景色（ランダムに選ばれた7色から1つ）
- text: box内に表示されるテキスト（ランダムに選ばれた12の単語から30～200単語が選ばれ、スペースで結合される）

### generateButtons.js
このファイルは、サイトBで使用されるボタンを生成します。ボタンの数は1000個で、それぞれには一意のID（btn1からbtn1000）が付与されます。

### サイトAのindex.html
サイトAは、異なるオリジンのサイトBのiframeをホストします。このページは以下の機能を持っています。

- iframeが読み込まれたとき、boxDataの内容をiframeに送信します。このデータは、boxの表示情報と、iframeのID（フレーム識別子）を含みます。
- iframeからメッセージを受信したとき、それに応じてboxを表示または非表示にします。boxの表示位置はiframeの位置と、その内部の特定の要素に基づいて決定されます。

### サイトBのindex.html
サイトBは、サイトAからboxDataを受け取り、その情報に基づいて特定の要素にマウスのイベントリスナーを追加します。マウスが特定の要素に入ったとき、その要素の情報とboxのデータを含むメッセージをサイトAに送信します。マウスが特定の要素から出たとき、boxを非表示にするためのメッセージをサイトAに送信します。