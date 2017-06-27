<?php

	// echo time();

	// echo '<br>';

	// echo date('Y-m-d', time());
	
	// php 获得现在的时间，-就是一天前
	$today = strtotime('-1day', time());

	//
	//把一天前的时间转化为数据链接中的格式
	$older = date('Y-m-d', $today);

	// 
	$url = 'https://moment.douban.com/api/stream/date/2017-06-26?alt=json&apikey=0bcf52793711959c236df76ba534c0d4&app_version=1.7.4&douban_udid=d623045db9fcb0d5243174c1bf1a675f887047c0&format=full&udid=9a34d8b038ff38971050199b0c5ee9c60c6d1ca3&version=6';
	echo file_get_contents($url);




