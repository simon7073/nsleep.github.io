const ap = new APlayer({
    container: document.getElementById('aplayer'),
	
    fixed: true, 		// 吸底模式
    autoplay: false,	// 自动播放
	theme: '#eee' ,		//主题色
	loop: 'all', 		// 循环播放, 可选值: 'all', 'one', 'none'
	order: 'list',		// 循环顺序, 可选值: 'list', 'random'
	preload: 'auto',	// 预加载，可选值: 'none', 'metadata', 'auto'
	volume: 0.7,		// 默认音量，请注意播放器会记忆用户设置，用户手动设置音量后默认音量即失效
	mutex: true,		// 阻止多个播放器同时播放
	listFolded: false,	// 列表默认折叠
	listMaxHeight: 90,	// 列表最大高度
    lrcType: 3,
    audio: [
      {
        name: "PDD洪荒之力", 		//名称
        artist: '徐梦圆',			// 艺术家 
        url: 'http://up.mcyt.net/?down/39868.mp3',				//链接 
        cover: 'http://oeff2vktt.bkt.clouddn.com/image/84.jpg',	//封面
		LRC: ''// 歌词链接
		theme: '#b7daff', 			//音频时的主题色
      },
      {
        name: '9420',
        artist: '麦小兜',
        url: 'http://up.mcyt.net/?down/45967.mp3',
        cover: 'http://oeff2vktt.bkt.clouddn.com/image/8.jpg',
      },
      {
        name: '风筝误',
        artist: '刘珂矣',
        url: 'http://up.mcyt.net/?down/46644.mp3',
        cover: 'http://oeff2vktt.bkt.clouddn.com/image/96.jpg',
      }
    ]
});