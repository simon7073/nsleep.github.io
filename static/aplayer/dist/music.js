

const ap = new APlayer({
    container: document.getElementById('aplayer'),
	
    fixed: true, 		// 吸底模式
	//mini: false,		// mini 模式
    autoplay: false,	// 自动播放
	theme: '#eee' ,		//主题色
	loop: 'all', 		// 循环播放, 可选值: 'all', 'one', 'none'
	order: 'list',		// 循环顺序, 可选值: 'list', 'random'
	preload: 'auto',	// 预加载，可选值: 'none', 'metadata', 'auto'
	volume: 0.7,		// 默认音量，请注意播放器会记忆用户设置，用户手动设置音量后默认音量即失效
	mutex: true,		// 阻止多个播放器同时播放
	listFolded: false,	// 列表默认折叠
	listMaxHeight: 90,	// 列表最大高度
   
    audio: [
      {
        name: "清新的小女孩 (For Ma)", 		//名称
        artist: 'July Tun',			// 艺术家 
        url: 'http://m10.music.126.net/20200305145226/59ee693de9e9eb14c1063de60767e939/ymusic/015f/5408/0552/6526b5aaedcbf23f463128a457d764d4.mp3',				//链接 
        cover: 'http://imge.kugou.com/stdmusic/150/20200114/20200114142306429193.jpg',	//封面
		LRC: '[id:$00000000][ar:July Tun][ti:清新的小女孩][by:][hash:33449784809b262256c6547500ca93d2][al:][sign:][qq:][total:0][offset:0][00:00.69]July Tun - 清新的小女孩 (For Ma)[00:14.27]႐ိုး႐ိုးေလးနဲ႔ လွေနတယ္ မရယ္[00:17.58]ဆန္း၂ျပား၂မ၀တ္ပါနဲ႔လားကြယ္[00:20.90]ကမ႓ာေက်ာ္တဲ့ မင္းသမီးေတာင္[00:23.41]ေငးေမာေလာက္တယ္ မရဲ႕ အလွေတြရယ္[00:27.61]မိုးျမင့္ထက္က ေငြၾကယ္ကေလးလိုပဲ[00:31.07]ေတာက္ပလြန္းတဲ့ ဒီမ်က္လံုးေတြနဲ႔[00:34.81]ဖမ္းစားညိႇဳ႕တက္တယ္ ေမ့လို႔မရႏိုင္[00:38.43]မရဲ႕အၿပံဳးေတြထဲ[00:41.22]ထူးျခားလြန္းတဲ့ မရဲ႕အလွေတြလည္း[00:44.48]ဟိုးေရွးဘ၀ကေတာင္းဆုျဖစ္မယ္[00:47.85]႐ူးခဲ့ရသူ ရင္ထဲလည္း[00:51.51]မရဲ႕အေၾကာင္းေတြ အခ်ိန္တိုင္းပဲ[00:54.24]ေက်ာင္း၀န္းထဲက အလွနတ္သမီးေတြလည္း[00:57.63]မရဲ႕အလွကုိ လံုး၀မမီွႏိုင္တယ္[01:01.34]အရမ္းလွတဲ့သူ မ ရယ္[01:04.77]ခ်စ္ပါရေစေတာ့ကြယ္[01:21.01]မရဲ႕အခ်စ္နဲ႔ျပည့္စံုၿပီေပါ့ တကယ္[01:24.19]ေက်းဇူးျပဳ၍ မမုန္းပါနဲ႔လားကြယ္[01:27.52]ဒီကမ႓ာမွာ မတစ္ေယာက္သာ ေတာင္းတမိတယ္[01:31.68]က်ေနာ့္ရဲ႕ အခ်စ္အိမ္ထဲ[01:34.22]ေမ့လို႔မရတဲ့ အိပ္မက္ထဲမွာပဲ[01:37.60]စိုးမိုးထားခဲ့ ဒီအၾကည့္ေတြနဲ႔[01:41.44]႐ူးသြပ္ခဲ့ရတယ္[01:43.32]မရဲ႕အလွမွာ ႐ုန္းလို႔မထြက္ႏိုင္ခဲ့[01:47.56]ထူးျခားလြန္းတဲ့ မရဲ႕အလွေတြလည္း[01:50.85]ဟိုးေရွးဘ၀ကေတာင္းဆုျဖစ္မယ္[01:54.41]႐ူးခဲ့ရသူ ရင္ထဲလည္း[01:58.13]မရဲ႕အေၾကာင္းေတြ အခ်ိန္တိုင္းပဲ[02:00.87]ေက်ာင္း၀န္းထဲက အလွနတ္သမီးေတြလည္း[02:04.19]မရဲ႕အလွကုိ လံုး၀မမီွႏိုင္တယ္[02:08.08]အရမ္းလွတဲ့သူ မ ရယ္[02:11.41]ခ်စ္ပါရေစေတာ့ကြယ္[02:27.48]ထူးျခားလြန္းတဲ့ မရဲ႕အလွေတြလည္း[02:30.87]ဟိုးေရွးဘ၀ကေတာင္းဆုျဖစ္မယ္[02:34.54]႐ူးခဲ့ရသူ ရင္ထဲလည္း[02:38.03]မရဲ႕အေၾကာင္းေတြ အခ်ိန္တိုင္းပဲ[02:40.76]ေက်ာင္း၀န္းထဲက အလွနတ္သမီးေတြလည္း[02:44.15]မရဲ႕အလွကုိ လံုး၀မမီွႏိုင္တယ္[02:47.90]အရမ္းလွတဲ့သူ မ ရယ္[02:51.34]ခ်စ္ပါရေစေတာ့ကြယ္[02:54.21]ထူးျခားလြန္းတဲ့ မရဲ႕အလွေတြလည္း[02:57.56]ဟိုးေရွးဘ၀ကေတာင္းဆုျဖစ္မယ္[03:01.16]႐ူးခဲ့ရသူ ရင္ထဲလည္း[03:04.67]မရဲ႕အေၾကာင္းေတြ အခ်ိန္တိုင္းပဲ[03:07.40]ေက်ာင္း၀န္းထဲက အလွနတ္သမီးေတြလည္း[03:10.84]မရဲ႕အလွကုိ လံုး၀မမီွႏိုင္တယ္[03:14.58]အရမ္းလွတဲ့သူ မ ရယ္[03:17.97]ခ်စ္ပါရေစေတာ့ကြယ္[03:21.53]ေက်းဇူးျပဳ၍ မရက္စက္လိုက္ပါနဲ႔',
		theme: '#b7daff', 			//音频时的主题色
      },
      {
        name: "别说我的眼泪你无所谓",
        artist: '东来东往',
        url: 'https://sharefs.yun.kugou.com/202003032326/c0e0ce23b74d1d164bac49394fd47cce/G001/M0A/1B/04/QQ0DAFS8JyKABuuTAEf6FcUG3VE907.mp3',
        cover: 'http://imge.kugou.com/stdmusic/150/20150720/20150720180551679451.jpg',
		LRC: '[id:$00000000][ar:东来东往][ti:别说我的眼泪你无所谓][by:][hash:75838cb58ebe8df070a873ce53e187a5][al:][sign:][total:294850][offset:0][00:00.60]东来东往 - 别说我的眼泪你无所谓[00:01.60]词:杨斌[00:02.60]曲:杨斌[00:31.95]一个人在这个夜里[00:37.03]孤单的难以入睡[00:41.33]真的想找个人来陪[00:45.08]不愿意一个人喝醉[00:49.49]醉了以后就会流泪[00:53.81]数着你给的伤悲[00:58.14]为什么你总让我憔悴[01:02.61]别说我的眼泪你无所谓[01:06.43]看我流泪你头也不回[01:10.78]哭过了泪干了心变成灰[01:14.94]我想要的美你还不想给[01:19.48]伤了的我的心怎去面对[01:23.83]爱给了你 我不后悔[01:28.22]只希望你给我一次机会[01:32.55]让我去追 让我去飞[01:36.98]毕竟爱过的心需要安慰[01:41.31]需要你安慰[02:25.36]一个人在这个夜里[02:30.23]孤单的难以入睡[02:34.76]真的想找个人来陪[02:38.43]不愿意一个人喝醉[02:42.79]醉了以后就会流泪[02:47.20]数着你给的伤悲[02:51.44]为什么你总让我憔悴[02:56.03]别说我的眼泪你无所谓[02:59.59]看我流泪你头也不回[03:04.16]哭过了泪干了心变成灰[03:08.31]我想要的美你还不想给[03:12.89]伤了的我的心怎去面对[03:17.19]爱给了你 我不后悔[03:21.60]只希望你给我一次机会[03:25.77]让我去追 让我去飞[03:30.29]毕竟爱过的心需要安慰[03:34.39]需要你安慰[03:43.43]看我流泪你头也不回[03:47.82]哭过了泪干了心变成灰[03:51.96]我想要的美 你还不想给[03:56.51]伤了的我的心怎去面对[04:00.80]爱给了你 我不后悔[04:05.23]只希望你给我一次机会[04:09.67]让我去追 让我去飞[04:13.91]毕竟爱过的心需要安慰[04:18.18]需要你安慰',
		theme: '#b7daff',
      },
      {
        name: "River Flows In You",
        artist: 'Yiruma',
        url: 'https://sharefs.yun.kugou.com/202003032335/9fdc534e5dbe985fe444cfb7963e29c6/G178/M04/08/10/8g0DAF2GhWmASzP4ADRwpnC4QzI515.mp3',
        cover: 'http://imge.kugou.com/stdmusic/150/20160907/20160907215425941158.jpg',
		LRC: '[id:$00000000][ar:arkady sevidov][ti:June][by:][hash:4399c9872c7235b60b58ce88dc487897][al:][sign:][qq:][total:320317][offset:0][00:01.58]纯音乐，请欣赏',
		theme: '#b7daff',
      },
    ]
});