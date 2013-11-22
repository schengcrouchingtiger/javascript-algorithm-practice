<?php
return array (
  'db_type' => 'mysql',
  'db_host' => 'localhost',
  'db_name' => 'feifeicms',
  'db_user' => 'wwwzdy5com',
  'db_pwd' => 'tK9,18zPAEcBVk',
  'db_port' => '3306',
  'db_prefix' => 'ff_',
  'db_charset' => 'utf8',
  'default_theme' => 'xin',
  'site_name' => '飞飞影视系统',
  'site_path' => '/',
  'site_url' => 'http://www.zdy5.com/',
  'site_keywords' => '飞飞影视系统PHP版,PHP电影程序',
  'site_description' => '努力打造飞飞影视系统为最好的PHP影视系统!',
  'site_email' => '110119@qq.com',
  'site_copyright' => '本网站为非赢利性站点，本网站所有内容均来源于互联网相关站点自动搜索采集信息，相关链接已经注明来源。',
  'site_hot' => '热门影片1
热门影片2
热门影片3
热门影片4
热门影片5
热门影片6',
  'site_tongji' => '<script language="javascript" type="text/javascript" src="http://js.users.51.la/14834816.js"></script>',
  'site_icp' => 'ICP备2010111号',
  'url_html_suffix' => '.html',
  'url_num_admin' => '18',
  'admin_time_edit' => true,
  'admin_ads_file' => 'Runtime/js',
  'admin_order_type' => 'addtime',
  'admin_time_limit' => '300',
  'home_pagenum' => '3',
  'home_pagego' => 'pagego',
  'rewrite_vodlist' => '/vod-show-id-$id-p-$page',
  'rewrite_voddetail' => '/vod-read-id-$id',
  'rewrite_vodplay' => '/vod-play-id-$id-sid-$sid-pid-$pid',
  'rewrite_vodsearch' => '/vod-search-wd-$wd$actor$director-p-$page',
  'rewrite_vodtype' => '/vod-type-id-$id-mcid-$mcid-letter-$letter-year-$year-area-$area-order-$order-p-$page',
  'rewrite_vodtag' => '/tag-vod-wd-$wd-p-$page',
  'rewrite_newslist' => '/news-show-id-$id-p-$page',
  'rewrite_newsdetail' => '/news-read-id-$id',
  'rewrite_newssearch' => '/news-search-wd-$wd-p-$page',
  'rewrite_newstag' => '/tag-news-wd-$wd-p-$page',
  'rewrite_speciallist' => '/special-show-p-$page',
  'rewrite_specialdetail' => '/special-read-id-$id',
  'rewrite_guestbook' => '/gb-show-p-$page',
  'rewrite_map' => '/map-show-id-$id-limit-$limit',
  'rewrite_mytpl' => '/my-show-id-$id',
  'data_cache_type' => 'file',
  'data_cache_vod' => '0',
  'data_cache_news' => '0',
  'data_cache_special' => '0',
  'data_cache_foreach' => '510cf584e9edf',
  'data_cache_vodforeach' => '0',
  'data_cache_newsforeach' => '0',
  'data_cache_specialforeach' => '0',
  'tmpl_cache_on' => false,
  'html_cache_on' => false,
  'html_cache_time' => 0,
  'html_read_type' => 0,
  'html_file_suffix' => '.html',
  'html_cache_index' => '1',
  'html_cache_list' => '1.5',
  'html_cache_content' => '12',
  'html_cache_play' => '12',
  'html_cache_iframe' => '12',
  'html_cache_ajax' => '12',
  '_htmls_' => 
  array (
    'home:index:index' => 
    array (
      0 => '{:action}',
      1 => 3600,
    ),
    'home:vod:show' => 
    array (
      0 => '{:module}_{:action}/{$_SERVER.REQUEST_URI|md5}',
      1 => 5400,
    ),
    'home:news:show' => 
    array (
      0 => '{:module}_{:action}/{$_SERVER.REQUEST_URI|md5}',
      1 => 5400,
    ),
    'home:vod:read' => 
    array (
      0 => '{:module}_{:action}/{id|md5}',
      1 => 43200,
    ),
    'home:news:read' => 
    array (
      0 => '{:module}_{:action}/{$_SERVER.REQUEST_URI|md5}',
      1 => 43200,
    ),
    'home:vod:play' => 
    array (
      0 => '{:module}_{:action}/{$_SERVER.REQUEST_URI|md5}',
      1 => 43200,
    ),
    'home:my:show' => 
    array (
      0 => '{:module}_{:action}/{$_SERVER.REQUEST_URI|md5}',
      1 => 43200,
    ),
  ),
  'upload_path' => 'Uploads',
  'upload_style' => 'Y-m-d',
  'upload_class' => 'jpg,gif,png,jpeg',
  'upload_thumb' => false,
  'upload_thumb_w' => '120',
  'upload_thumb_h' => '140',
  'upload_water' => false,
  'upload_water_img' => './Public/images/water.gif',
  'upload_water_pct' => '75',
  'upload_water_pos' => '9',
  'upload_http' => false,
  'upload_http_down' => '5',
  'upload_http_prefix' => '',
  'upload_ftp' => false,
  'upload_ftp_host' => '',
  'upload_ftp_user' => '',
  'upload_ftp_pass' => '',
  'upload_ftp_port' => '',
  'upload_ftp_dir' => '',
  'play_show' => '0',
  'play_width' => '1000',
  'play_height' => '480',
  'play_qvod' => 'http://union.feifeicms.com/install/down.php?id=qvod',
  'play_bdhd' => 'http://union.feifeicms.com/install/down.php?id=bdhd',
  'play_playad' => 'http://union.feifeicms.com/loading/show.html',
  'play_second' => 0,
  'play_language' => '国语,英语,粤语,闽南语,韩语,日语,国语/粤语,其它',
  'play_area' => '大陆,香港,台湾,美国,韩国,日本,泰国,新加坡,马来西亚,印度,英国,法国,加拿大,西班牙,俄罗斯,其它',
  'play_year' => '2013,2012,2011,2010,2009,2008,2007,2006,2005,2004,2003,2002,2001,2000,1990,1980,1970,1960,1950',
  'play_server' => 
  array (
    'down_a' => 'http://downa.feifeicms.com/',
    'down_b' => 'http://downb.feifeicms.com/',
  ),
  'play_urllist' => '1',
  'play_collect_time' => '2',
  'play_collect_name' => '0',
  'play_collect' => false,
  'play_collect_content' => 
  array (
    0 => '',
  ),
  'url_html' => '0',
  'url_dir_a' => '2',
  'url_dir_b' => '5',
  'url_time' => '2',
  'url_number' => '20',
  'url_vodlist' => '{listdir}/index.html',
  'url_voddata' => '{listdir}/{id}/index.html',
  'url_vodplay' => 'vod/player/',
  'url_newslist' => '{listdir}/index.html',
  'url_newsdata' => '{listdir}/{id}/index.html',
  'url_play' => '{listdir}/{id}/play.html',
  'url_html_list' => '1',
  'url_html_play' => '0',
  'url_rewrite' => '1',
  'url_map' => 'detail/',
  'url_mytpl' => '',
  'url_special' => 'detail/',
  'user_gbcm' => false,
  'user_second' => '600',
  'user_replace' => '她妈|它妈|他妈|你妈|去死|贱人',
  'user_gbnum' => '10',
  'user_cmnum' => '10',
  'user_vcode' => '0',
  'user_register' => '0',
  'html_home_suffix' => '.html',
  'upload_ftp_del' => '0',
  'rand_hits' => '9',
  'rand_updown' => '9',
  'rand_gold' => '9',
  'rand_golder' => '9',
  'rand_tag' => '0',
  'user_post' => '0',
  'user_check' => '0',
);
?>