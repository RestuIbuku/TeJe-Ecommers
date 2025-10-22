'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "6fec5a0d302f6cf6697ae5d11f99b434",
".git/config": "fe0ab9db8ca6a3cbbd48582d004f1a57",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "58e4ef73ad9824547aeb1cabcae87b2e",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "97d4258e01caf29ef069e2ecfe30fa23",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "a817ab804d1b3625ce86aaf38ace71eb",
".git/logs/refs/heads/main": "087168dd87026013a4381414a4b6c6b1",
".git/logs/refs/remotes/origin/main": "f065936b2a4fdd31c6e340dd35ab4649",
".git/objects/02/1d4f3579879a4ac147edbbd8ac2d91e2bc7323": "9e9721befbee4797263ad5370cd904ff",
".git/objects/04/225384efc553eb78de476d74da174c46d3e63a": "20766f780e60851525a02d8270bc651f",
".git/objects/0d/1d848868fdb28e8d33dd980a80833722c0e705": "fe9ffc9b7a71231d8224ffca64373f8d",
".git/objects/17/744a48681753ef0c3baa0be7a75df1cc1a8449": "eac02bbc29c105718519bf85cbcfef38",
".git/objects/18/1616dce6c3c6a62b5d79874281b6de1f918290": "6c6b6393d43401a5de87cc6a8f7aa5f3",
".git/objects/1c/45a5a470b5d8842882a2f9be4fab63d0592da2": "b43c9302493099cefbc61cb425619090",
".git/objects/1e/50beaecad6cb3871576554f24df0f1ed3cd71d": "3b0322eb1a8af359d7764019d1e1457a",
".git/objects/20/3a3ff5cc524ede7e585dff54454bd63a1b0f36": "4b23a88a964550066839c18c1b5c461e",
".git/objects/26/dd44aee666b074c83b16f2fab5ce86483c4723": "5182491ed022207d2ea06a0a6c47631a",
".git/objects/28/4e8b46192aab4f9469534905643312f606a40c": "1add6a8c8330983870f59200913f5d8c",
".git/objects/28/9591b439c6ad3683cda539df59bc5de587e22d": "6ffb2a7d5247f5ac50c2499775902ef8",
".git/objects/29/30b81361ed99978292d94748ae8cfef3089c6c": "008bcc798e197a39c5c9db49be6fd89b",
".git/objects/29/3f0ecab2c39f54cba7f5f7074f4e72593d4a66": "8b2d817a3e0a591ae1b89fc0f1a243b7",
".git/objects/29/f22f56f0c9903bf90b2a78ef505b36d89a9725": "e85914d97d264694217ae7558d414e81",
".git/objects/2e/ef5959fdf0f9d9311929d0222afb8fc49225a6": "553fe0aa20d9febdbeb16c62c793b078",
".git/objects/31/1fc10f42ed8469bd9c16cfd512db1acaa8cca4": "3d54303bc6c95242e072094b33330876",
".git/objects/32/782ed884ac17fe6dfa929676ede8b87a2e493a": "63081b582d3a41b63b0cb1db520f0c79",
".git/objects/3a/ce84dea034c4cace0d8322ec09c1a59028bc80": "c3186da8f9d94114a97db7984163c7be",
".git/objects/3f/61230143d7d727beb0e564d13fed4c744cceec": "07be5298d3c9a4ac2c7881a829762437",
".git/objects/3f/b0e89b725c73b2226dccd75fe5e451467e93eb": "aa9042445086b5e3db742571a87bfe64",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/47/25b7502394152a93688d04649f0ca0f90f4941": "9adff24850af0438240e6163da3c63ee",
".git/objects/4a/a8bf1378c20cd1040fdd85ff5652d38db7247e": "bf3e479f4b4c4266a0198379bbf1e95d",
".git/objects/4d/bf9da7bcce5387354fe394985b98ebae39df43": "534c022f4a0845274cbd61ff6c9c9c33",
".git/objects/4e/16ffe09e93fbc8c1a78a7091ac763b55b7d651": "a48f1e76fc3487c57640d6d937d23c52",
".git/objects/4f/fbe6ec4693664cb4ff395edf3d949bd4607391": "2beb9ca6c799e0ff64e0ad79f9e55e69",
".git/objects/5b/bf998706a4807f75471fe9ce1620c38812193a": "78507a45b1ac5b136c12985161b0a741",
".git/objects/5c/b76a81b36140f0a05577cdaf9fd4553fc761eb": "1928cec99a9f12a0d60543a68b9467ac",
".git/objects/5e/4c4fd6603944c8dc123a52fc095f4d19cb02bd": "187859438b3fc935845632f44520ee8e",
".git/objects/60/128cd9feb42ac1e117e8eb826af400c0f42ffc": "65a05d8645f5e60b9611c63212e81411",
".git/objects/65/c9a15099ac874eccbb1d463b3a355ed7cf0fe2": "dd3086e9fdc9c51b13df4cc6b994446a",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/6d/d4a7d0146a17b9ffdf581713ec1ad5367885f8": "0f32e249fc2b763f2d5b285fe82d8a32",
".git/objects/70/f8c3f0777d03f0a4966bb8dd2be8c0ee45083b": "88ec48eb754d80eb7ad02428a02c4de1",
".git/objects/71/0fad74aeb3dc96a663814f4f59084ecbfb3102": "8b11448b16ade654c57e4d86a99c8872",
".git/objects/71/97e99c5a2578decf1bdb70d38384aa42314ee4": "061fe0fc73dd0c3d15d87a9392dd77c0",
".git/objects/74/0a793e7d01748600f1ed2144d2287646c3d9d3": "d3505b83df5b33205c70170336c6c4cf",
".git/objects/76/318352da6fd344aca4e4d840540ed06bd3a059": "0edb6a1703300762ac186461c8fd40ab",
".git/objects/76/623e95ce651f2df239bbf641384bbe16f8fb26": "01c2f9de8fd7a4e531f88d041715efe4",
".git/objects/77/6a5e4ad8a2f5847ef112f3c0ae225d7a38e75a": "fbac5eb8eea5f337fe298fd72e3fd78f",
".git/objects/77/d11be75a865ab4216e3cd817aee139cbf68501": "41c83767969057ddb7367364c56eb587",
".git/objects/79/863b7c1629d5adf9a67fa57cb8e57ad09d6c61": "84f2320b6f5c34658e27c185cb54282b",
".git/objects/7a/6c1911dddaea52e2dbffc15e45e428ec9a9915": "f1dee6885dc6f71f357a8e825bda0286",
".git/objects/7c/668e7aa0bae04736908e27c74ab0f8e2338c75": "f05a660f2b8c4eeec30f4f361a9387a5",
".git/objects/80/942494c5260167e10175cbaa92fa58bd0e54b3": "a6566f850ddd8696edc3872ee38b8407",
".git/objects/82/8a209a01cdd33b7cf45de2ba11f86dff4e382a": "1938edf83f7e202008d0e861b1f14b95",
".git/objects/82/a720de593c3ab12590c9386af257aadb2ca209": "e5d6431e3fcd13b8e432960dd9cb0996",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/0cbb018db7f0bdd04b29da53f626177852de33": "b609e12168a2c5ad89d59cb982e1f9e5",
".git/objects/8a/838f7b560f48a4597659f73f650066d9e1ee7c": "64be30d99c66f7c327ee92f38bbc3526",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/dd6781b71c7b848c688f3ecdd0bc369a2056ba": "eef2e32bda1f2fa8c9e1f4e21836e6b0",
".git/objects/8e/44350f485ab54b41eadc2e8c659c4c263e9357": "9ad4c2dadf5279112b0eb97a684b2c32",
".git/objects/91/f27dcc83abfcd751ad2ca1651d4b8a68d9d433": "e623ba72b581eba54d320c582ce50487",
".git/objects/98/0d49437042d93ffa850a60d02cef584a35a85c": "8e18e4c1b6c83800103ff097cc222444",
".git/objects/9b/3ef5f169177a64f91eafe11e52b58c60db3df2": "91d370e4f73d42e0a622f3e44af9e7b1",
".git/objects/9c/c386c718e3d7718a7dea4e49fcb6cacead954b": "48ee82065ed45d5e298fa07e99e2cfd6",
".git/objects/9e/3b4630b3b8461ff43c272714e00bb47942263e": "accf36d08c0545fa02199021e5902d52",
".git/objects/9f/f8a2a1304f2b19d4c116ab4b397eac4c09551d": "784b80f49eec301bfd1e8c03202368e3",
".git/objects/a3/8426f09d1c6c1da98a9c449636a0b2fc830c01": "0408f75860308f15eabab4024f1f1b2a",
".git/objects/a4/5e0c4065d75365d641bafd9670170800ab62fa": "e839036c47cbae8fce58b73d0fc5a44f",
".git/objects/a6/fe57579234c9ea0364438bda5224e99e3580de": "da740a58bf76697a26478305176f8961",
".git/objects/ad/2150396f7ab024b7827dbaf3cc1fd6668874a4": "21fd6f5d2d57f79a78312769ca3b8f29",
".git/objects/ae/a65e4bb061e62aad00363f4afeca8c53206575": "3a8b6bad55c14f39f7aeede7afd8f6e3",
".git/objects/b3/0d88719ec6ad2c49cd9063335fdc54bd608c1e": "7ca989d3818349a3fcc946aaa4a22c75",
".git/objects/b4/8b81405d23fe7c54ea72c6c6edd55393630a42": "66c7b2d9dcc730f3bb59390259cb0211",
".git/objects/b6/b8806f5f9d33389d53c2868e6ea1aca7445229": "b14016efdbcda10804235f3a45562bbf",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/f28c45176fd1a4c0a58e7e3bad8b4069fa3ea6": "26c0124c46eeab4ccfa055d5c97c9744",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bc/219ca0cd8785d37b229d794880a19c682ea3b1": "7bde073d292d3ee3f4695f4ef525d145",
".git/objects/bd/b0311fac8fcb64c57f1ef4a49cc1eba41eb428": "b5c9f01b0c1454ddd98e89b60cab31b3",
".git/objects/be/d07999ad00937378f5a55dec318cee20b1a4f0": "66729fd0818495a60fa36ffe4418265b",
".git/objects/c4/016f7d68c0d70816a0c784867168ffa8f419e1": "fdf8b8a8484741e7a3a558ed9d22f21d",
".git/objects/c4/da404933c070c4b645cf66c8a2bd875e322a18": "15724c8d14be18280a4696d1658f9e79",
".git/objects/c6/290f1dd03058a299d14e8cbc41758513ecf20c": "b35ea655b4dda59176d84dcbf4b12ebf",
".git/objects/c7/cf7f070cf9c3cd394c6df1695dbef3c2c8b01f": "b8caf221849c1048557ccf928fc0efdb",
".git/objects/ca/3b852b43b71c82ffb43522769feb6e5f5519a9": "4fe414b76ebfe119119eb60cf7333076",
".git/objects/ca/3bba02c77c467ef18cffe2d4c857e003ad6d5d": "316e3d817e75cf7b1fd9b0226c088a43",
".git/objects/cb/439568f52f924ed0ee9c6c992bb696020caca1": "ed52208192872c50bbed93d3d21b2ec3",
".git/objects/d2/f44a82d60a3e14c6ceeee2ddec83c3aafc2791": "34e5d67e92fb9f84e926004200831f57",
".git/objects/d3/16fc39f4af36387e84ad10b4a0dfa4714e2344": "f6cb9667b1806a4d039106e88605a686",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d5/6d004766e2f4683f6a04dec9583136d28d0b89": "4abbb31b5ef30717e1783e4ac3e40b91",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/e3/e9ee754c75ae07cc3d19f9b8c1e656cc4946a1": "14066365125dcce5aec8eb1454f0d127",
".git/objects/e5/38c60a5e3bffe03e0a2594b26e449f628ee8af": "1dc2f62e4948231bca3be0a8999cdb15",
".git/objects/e7/e76dbbe16fea21ffe3fc4f189dc030bb711107": "777d31de45fd5bf70cb8ad26909fddb6",
".git/objects/e8/6697ce01555b41f39980336b3b679ff8ba6634": "0b602c607b15ee8cf12fa11b6db89620",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/ea/58cf1d07f1057fea532c997f67e54bd92de612": "860f2d2a06751d5ab61ee0d1db608174",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/e3fdfafea0f36f67f3dae995b68c84533ff7ce": "72e7bb34743a6da27f9b7219f501bdb0",
".git/objects/ed/b55d4deb8363b6afa65df71d1f9fd8c7787f22": "886ebb77561ff26a755e09883903891d",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/af392fd5137f368bee615714f30592db99033b": "953cf38116d9fa8d0ee1de08bf841208",
".git/objects/f4/468c65c891eb1cfee9aea75b64324e69a1377c": "f0574894fea805a2a285f3d033923bd9",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/f6/d7a93b5f15ddb52544d0b2f8da72d9d5ee3429": "1f5b3deeec84b51c8acce7c5953aa2a0",
".git/objects/fc/ee511d4694159f469681c679a5bebc2b2244ae": "1bf35ca2a6459d2567a5facc7c838657",
".git/objects/fe/02a560780d4280833c2ba528c9f5b9cc990735": "7c45ef70f48e71586e17b1d1ba58d6e3",
".git/objects/fe/3b987e61ed346808d9aa023ce3073530ad7426": "dc7db10bf25046b27091222383ede515",
".git/objects/ff/7be981fbb87bf9c0c0447f79db27283edd8e2d": "32c8436f706e1673f0d4f880349dee3b",
".git/objects/ff/a55cad4150025781f453c9800311105335a30c": "052369ee94a45e7cb5c5b9e02c998eb6",
".git/ORIG_HEAD": "b4d802a21fee4ca2f44f14944f5965d2",
".git/refs/heads/main": "b4d802a21fee4ca2f44f14944f5965d2",
".git/refs/remotes/origin/main": "8f594528f0ff3874157b8db8d9f7c57c",
"assets/AssetManifest.bin": "4a9f24f3afcf84ba2add14940faf6ffb",
"assets/AssetManifest.bin.json": "972202cb2979a758ca8901e362bb96cc",
"assets/AssetManifest.json": "b571c6ab6f440244b84f798ce12d34c9",
"assets/assets/images/baju.png": "23e70f868fc996a156ba4ad049ca65de",
"assets/assets/images/bg-aplikasi.jpeg": "f0ff3e316fa4f4d9150a3a133c6bfb27",
"assets/assets/images/celana-jeans.jpg": "3ff35f5c13e09725cc4bbe4aef2c5482",
"assets/assets/images/celana.png": "877b63115c6668101c13e7d8f92d4165",
"assets/assets/images/kaos-jerseyMU.jpg": "d416f9d96bef06246dce31428bd8927f",
"assets/assets/images/logo-TJ.png": "81b599b5c07fd1974a988451925c19da",
"assets/assets/images/logoSplash-TJ.png": "5c51caeffac93db112193f877a4df78f",
"assets/assets/images/produk-sepatu.jpeg": "2abe31b6d90b55f6ba2934ac54f231e1",
"assets/assets/images/sandal.png": "b80ddeb1538c19fd446c4ebda2e55bc6",
"assets/assets/images/sendal-MU.jpg": "3c9a89c0f94a9a49f74088831652af35",
"assets/assets/images/sepatu.png": "fd2936ccbdcb08174cb81f9ae85714c2",
"assets/assets/images/tas-belanja.jpg": "572b8e74b8beee489eb8d99df4e003b4",
"assets/assets/images/tas-MU.jpg": "b70daf969fb73a4af6bd2a856c28fc1c",
"assets/assets/images/tas.png": "86aae88934ec228bd01dbc18897bca17",
"assets/assets/images/tumblr-MU.jpg": "f02a39ec155b79d456c6f5cf8c69354b",
"assets/assets/images/tumblr.png": "f515b38112feb884fee79aa923ce8bdf",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "fdbf8f208bc4fdde10acceaefadce9aa",
"assets/NOTICES": "152253fb62e8f6ed26dc3449c2fd2349",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/getwidget/icons/dribble.png": "1e36936e4411f32b0e28fd8335495647",
"assets/packages/getwidget/icons/facebook.png": "293dc099a89c74ae34a028b1ecd2c1f0",
"assets/packages/getwidget/icons/google.png": "596c5544c21e9d6cb02b0768f60f589a",
"assets/packages/getwidget/icons/line.png": "da8d1b531d8189396d68dfcd8cb37a79",
"assets/packages/getwidget/icons/linkedin.png": "822742104a63a720313f6a14d3134f61",
"assets/packages/getwidget/icons/pinterest.png": "d52ccb1e2a8277e4c37b27b234c9f931",
"assets/packages/getwidget/icons/slack.png": "19155b848beeb39c1ffcf743608e2fde",
"assets/packages/getwidget/icons/twitter.png": "caee56343a870ebd76a090642d838139",
"assets/packages/getwidget/icons/wechat.png": "ba10e8b2421bde565e50dfabc202feb7",
"assets/packages/getwidget/icons/whatsapp.png": "30632e569686a4b84cc68169fb9ce2e1",
"assets/packages/getwidget/icons/youtube.png": "1bfda73ab724ad40eb8601f1e7dbc1b9",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"flutter_bootstrap.js": "b9fe46589d645546c1d13fc3f395c9f7",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "7d0bf7c5b080bd26c2b6f0cb41df3614",
"/": "7d0bf7c5b080bd26c2b6f0cb41df3614",
"main.dart.js": "431548f53eee4b86b3864c9171d49364",
"manifest.json": "91551e2cff5facef057afef4111b61c5",
"version.json": "b039b6005dee6ef4bac8282f070c6e3e"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
