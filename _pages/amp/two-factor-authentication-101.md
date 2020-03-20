---
layout: post-amp
image: images/posts/2FA-101.jpg
title: "احراز هویت دو عاملی <sub>به زبان ساده</sub>"
excerpt: "احراز هویت دو عاملی چیست و چگونه به امنیت حساب‌های شما کمک می‌کند؟ چگونه قابل استفاده است و چه سرویس‌هایی از آن استفاده می‌کنند؟"
tags:
- "به زبان ساده"
- "احراز هویت دو عاملی"
- "اینترنت"
- "امنیت"
- "رمز پویا"
- "2FA"
published: true
comments: false
sitemap: false
date: 2018-09-06 21:00:00 +0000
permalink: "/two-factor-authentication-101-amp/"
---

تصور کنید هکری بدون اطلاع شما، رمز عبور یکی از حساب‌های کاربری مهم شما را متوجه شود. چه مانعی بین او و از دست رفتن تمامی اطلاعات شما و سواستفاده‌های احتمالی وجود دارد؟ **_احراز هویت دو عاملی_** و یا آنچه اخیرا با نام **رمز پویا** می‌شناسید، برای پاسخ به این سوال آمده است.

## احراز هویت دو عاملی چیست؟
احراز هویت دو عاملی یک ویژگی ساده است که از شما چیزی بیشتر از تنها یک رمز عبور می‌خواهد. احراز هویت دو عاملی از دو عاملِ ***«چیزی که می‌دانید»*** (مانند رمز عبور) و ***«چیزی که دارید»*** (مانند تلفن همراه) یا ***«کسی که هستید»*** (مثل الگوی شبکیه‌ی چشم و یا اثر انگشت شما) تشکیل شده است. مطمئنا شما بارها از احراز هویت دو عاملی در زندگی خود استفاده کرده‌اید؛ مثلا هنگامی که در کنار ورود رمز حساب بانکی خود باید حتما کارت بانکی (که  تنها در اختیار شما هست) را وارد کنید و یا وقتی که بعد از وارد کردن رمز گوشی خود از اسکن اثرانگشت و اسکن شبکیه چشمتان برای ورود استفاده می‌کنید.

<figure class="align-center"><amp-img class="align-center" src="https://typo.ir/images/posts/2FA-illustration.png" alt="Two Factor Authentication" width="500px" height="491px"></amp-img></figure>

در صورت محیا بودن این ویژگی، هنگامی که شما رمز عبور خود را در جایی وارد می‌کنید، رمز موقت دیگری (Time-based One Time Password) در اختیار شما قرار می‌گیرد که ***تنها شما به آن دسترسی دارید*** و تنها شما با استفاده از آن قادر به ورود به حسابتان هستید. این رمز موقت می‌تواند به ایمیل شما ارسال شود، به شما پیامک شود، به صورت تماس تلفنی به اطلاع شما برسد و یا به صورت خودکار توسط یک نرم‌افزار و یا سخت‌افزار که در اختیار شماست تولید شود.

رئیس جمهور ایالات متحده در سال ۲۰۱۶ در برنامه‌ای به نام ***«برنامه‌ی اقدام ملی برای امنیت سایبری»*** بر اهمیت این روش احراز هویت تاکید کرده:
> «شهروندان ایالات متحده را در ایمن ساختن حساب‌هایی آنلاین خود با افزودن لایه‌های امنیتی ورای رمز عبور، تقویت کنید. امریکایی‌ها می‌توانند با ترکیبی از رمز عبورهای قوی و عامل دیگری مانند اثر انگشت و یا رمز موقتی که با پیامک دریافت می‌شود، حساب‌های خود را ایمن‌تر سازند. رئیس جمهور از شهروندان ایالات متحده می‌خواهد که علاوه بر رمز عبور، از  احراز هویت چند عاملی برای ورود به حساب‌های آنلاین خود استفاده کنند.»
<cite>[برنامه‌ی اقدام ملی برای امنیت سایبری، دبیر مطبوعاتی کاخ سفید](https://obamawhitehouse.archives.gov/the-press-office/2016/02/09/fact-sheet-cybersecurity-national-action-plan "Cybersecurity National Action Plan")</cite>

### تفاوت احراز هویت دو عاملی با دومرحله‌ای چیست؟
در احراز هویت دو مرحله‌ای، هر دو عامل ورود از نوع عامل اول یعنی «چیزی که می‌دانید» است. به طور مثال برای ورود به حساب خود علاوه بر رمز عبور نیاز به پاسخ به یک سوال شخصی (مثل تاریخ تولد) خواهید داشت. این روش نسبت به احراز هویت دو عاملی از امنیت کمتری برخوردار است زیرا این عامل نیز به راحتی توسط مهندسی اجتماعی و یا حملات فیشینگ قادر به هک شدن هستند.

### احراز هویت دو عاملی چقدر امن است؟
***امنیت مطلق نیست.*** با وجود اینکه احراز هویت دو عاملی یک لایه‌ی امنیتی قدرتمند دیگر به حساب‌های شما اضافه می‌کند، اما مصون از حملات هکرها نیست. به طور مثال در سال ۲۰۱۱ شرکت RSA [اعلام کرد](https://web.archive.org/web/20110515010015/http://www.rsa.com/node.aspx?id=3872 "Open Letter to RSA Customers") که توکن‌های احراز هویت آن موسوم به SecurID هک شده است. برای هک سیستم‌های احراز هویت دو عاملی نیاز به دسترسی به عامل دوم (مثلا تلفن همراه یا اثر انگشت شما) و یا مکانیزم تولید رمز موقت است.

### آیا استفاده از آن سخت است؟
احراز هویت دو عاملی یک مرحله‌ی دیگر به پروسه‌ی ورود شما به حسابتان اضافه می‌کند. اینکه آیا یک مرحله بیشتر برای ورود به حساب، به امنیت بیشتر شما می‌ارزد یا خیر، بستگی به خودتان دارد!

### چگونه از احراز هویت دوعاملی استفاده کنم؟
بسته به سرویسی که از آن استفاده می‌کنید، در صورت محیا بودن احراز هویت دو عاملی، به طور معمول شما حداقل نیاز به یکی از این موارد را دارید: راه تماس تلفنی و یا ارسال پیامک، آدرس ایمیل، نرم‌افزار و یا سخت‌افزار تولید توکن.

مزیت استفاده از نرم‌افزار نسبت به پیامک، تماس تلفنی و ایمیل این است که دیگر ***نیازی به اتصال به شبکه‌ی مخابراتی و اینترنت نیست*** و تنها با باز کردن نرم‌افزار، می‌توانید رمز موقت خود برای ورود را دریافت کنید. بعلاوه احتمال شنود پیامک و سواستفاده از رمز‌های ورود محتمل است.

<center>
<amp-twitter width="500"
  height="187"
  layout="responsive"
  data-tweetid="813272340280856576">
</amp-twitter>
</center>


از جمله نرم‌افزارهای احراز هویت دو عاملی می‌توان به [Authy](https://authy.com "Authy Two-factor Authentication (2FA) App & Guides")، [Google Authenticator](https://support.google.com/accounts/answer/1066447?co=GENIE.Platform%3DAndroid&hl=en "Install Google Authenticator") و [FreeOTP](https://freeotp.github.io "FreeOTP") اشاره کرد. نرم‌افزارهای مدیریت رمز عبور مانند [1Password](https://1password.com "1Password")، [LastPass](https://lastpass.com/auth/ "LastPass Authenticator") و [Dashlane](https://www.dashlane.com "Dashlane") نیز از این امکان پشتیبانی می‌کنند.

در پروسه‌ی فعالسازی احراز هویت دو عاملی، کد QR و یا رمزی در اختیار شما قرار می‌گیرد که با اسکن و یا وارد کردن آن در این نرم‌افزارها، حساب شما فعال شده و رمز عبور موقتی در اختیار شما قرار می‌گیرد که برای احراز هویت دو عاملی قابل استفاده است. در نهایت یک کد پشتیبانی (یا ریکاوری) برای مواقعی که دسترسی به نرم‌افزار را ندارید در اختیار شما قرار می‌گیرد. این کد های پشتیبانی را در محلی ایمن نگهداری کنید تا در صورت از دست رفتن دسترسی به نرم‌افزار، کماکان قادر به ورود به سرویس‌های مورد نظر باشید.

سخت‌افزارهای احراز هویت دو عاملی، کلیدهای امنیتی Universal 2nd Factor (به اختصار U2F) و یکی از ایمن‌ترین روش‌های احراز هویت دو عاملی هستند که با اتصال به درگاه USB کامپیوتر شما و یا با کمک NFC، توکن‌ها را در اختیار سرویس‌هایی که از این پروتکل پیشتیبانی می‌کنند، قرار می‌دهند. از جمله این دستگاه‌ها می‌توان به [YubiKey](https://www.yubico.com "YubiKey Strong Two Factor Authentication") اشاره کرد.

<amp-video controls
  width="560"
  height="315"
  layout="responsive"
  poster="https://raw.githubusercontent.com/typofile/localb1/982d84815763597a0ba0982fe24d7b19/2fa-cover.jpg">
  <source src="https://raw.githubusercontent.com/typofile/localb1/59ea2dcff2d8f5b434e795e40edff7e5/2FA-Apple.webm"
    type="video/webm" />
  <source src="https://raw.githubusercontent.com/typofile/localb1/a35e9c68b331633c6fe292a1634dc984/2FA-Apple.mp4"
    type="video/mp4" />
    <source src="https://raw.githubusercontent.com/typofile/localb1/8c7ae691d54c8d0cb3041b8f08a2cc11/2FA-Apple.ogg"
    type="video/ogg" />
  <div fallback>
    <p>This browser does not support the video element.</p>
  </div>
</amp-video>
<i class="fas fa-play" style="color:#ea1d5d;"></i> [مشاهده در Youtube](https://www.youtube.com/watch?v=h8VsNGvTvbk "احراز هویت دو عاملی و Apple ID")
<i class="fas fa-play" style="color:#ea1d5d;"></i> [مشاهده در آپارات](https://www.aparat.com/v/OmAP8 "احراز هویت دو عاملی Apple ID")


### چه سرویس‌هایی از احراز هویت دو عاملی پشتیبانی می‌کنند؟
بیشتر سرویس‌های نام آشنا حداقل از یک روش احراز هویت دو عاملی پشتیبانی می‌کنند. بخشی از این سرویس‌ها به طور خلاصه برای شما گردآوری شده و به صفحه‌ی راهنمای راه‌اندازی لینک شده‌اند. سرویس‌هایی که از <i class="fas fa-comment-alt"></i> پیامک، <i class="fas fa-phone-square"></i> تماس تلفنی، <i class="fas fa-envelope-square"></i> ایمیل، <i class="fas fa-qrcode"></i> نرم‌افزاری و <i class="fas fa-save"></i> سخت‌افزاری پشتیبانی می‌کنند با آیکون‌های مربوطه مشخص شده‌اند.

### شبکه‌های اجتماعی

<table> 
  <thead> 
    <tr> 
      <th>سرویس</th> 
      <th>متد</th> 
      <th style="text-align: right;">سرویس</th> 
      <th>متد</th> 
      <th style="text-align: right;">سرویس</th> 
      <th style="text-align: center;">متد</th> 
    </tr> 
  </thead> 
  <tbody> 
    <tr> 
      <td><strong><em><a href="https://support.500px.com/hc/en-us/articles/205115877-How-do-I-setup-Two-Factor-Authentication" title="500px Two Factor Authentication">500px</a></em></strong></td>
      <td><i class="fas fa-comment-alt"></i> <i class="fas fa-qrcode"></i></td> 
      <td style="text-align: right;"><strong><em><a href="https://www.facebook.com/help/148233965247823" title="Facebook Two Factor Authentication">Facebook</a></em></strong></td> 
      <td><i class="fas fa-comment-alt"></i> <i class="fas fa-qrcode"></i> <i class="fas fa-save"></i></td> 
      <td style="text-align: right;"><strong><em><a href="https://www.google.com/intl/en-US/landing/2step/features.html" title="Google 2-step verification">Google+</a></em></strong></td> 
      <td style="text-align: center;"><i class="fas fa-comment-alt"></i> <i class="fas fa-phone-square"></i> <i class="fas fa-qrcode"></i> <i class="fas fa-save"></i></td></tr><tr> 
    <td><strong><em><a href="https://help.instagram.com/566810106808145" title="Instagram two-step verification">Instagram</a></em></strong></td> 
    <td><i class="fas fa-comment-alt"></i> <i class="fas fa-qrcode"></i></td> 
    <td style="text-align: right;"><strong><em><a href="https://www.linkedin.com/help/linkedin/answer/544" title="LinkedIn two-step verification">LinkedIn</a></em></strong></td> 
    <td><i class="fas fa-comment-alt"></i></td> 
    <td style="text-align: right;"><strong><em><a href="https://help.pinterest.com/en/articles/two-factor-authentication" title="Pinterest 2FA">Pinterest</a></em></strong></td> 
    <td style="text-align: center;"><i class="fas fa-comment-alt"></i> <i class="fas fa-qrcode"></i></td> 
  </tr> 
  <tr> 
    <td><strong><em><a href="https://www.reddithelp.com/en/categories/using-reddit/your-reddit-account/how-set-two-factor-authentication" title="Reddit two-step verification">Reddit</a></em></strong></td> 
    <td><i class="fas fa-qrcode"></i></td> 
    <td style="text-align: right;"><strong><em><a href="https://support.snapchat.com/en-US/article/enable-login-verification" title="Snapchat two-step verification">Snapchat</a></em></strong></td> 
    <td><i class="fas fa-comment-alt"></i> <i class="fas fa-qrcode"></i></td> 
    <td style="text-align: right;"><strong><em><a href="https://help.twitter.com/en/managing-your-account/two-factor-authentication" title="Twitter two-step verification">Twitter</a></em></strong></td> 
    <td style="text-align: center;"><i class="fas fa-comment-alt"></i> <i class="fas fa-qrcode"></i> <i class="fas fa-save"></i></td> 
  </tr>
  <tr> 
    <td><strong><em><a href="https://tumblr.zendesk.com/hc/en-us/articles/226270148-Two-factor-authentication" title="Tumbler two-step verification">Tumbler</a></em></strong></td>
    <td><i class="fas fa-comment-alt"></i> <i class="fas fa-qrcode"></i></td> 
    <td style="text-align: right;"></td> <td></td> <td style="text-align: right;"></td> 
    <td style="text-align: center;"></td> 
  </tr>
  </tbody>
</table>


### پیام‌رسان‌ها

<table>
  <thead>
    <tr>
      <th>سرویس</th>
      <th>متد</th>
      <th style="text-align: right;">سرویس</th>
      <th>متد</th> <th style="text-align: right;">سرویس</th>
      <th style="text-align: center;">متد</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong><em><a href="https://support.signal.org/hc/en-us/articles/360007059792" title="Signal Registration Lock">Signal</a></em></strong></td>
      <td><i class="fas fa-comment-alt"></i> <i class="fas fa-phone-square"></i></td>
      <td style="text-align: right;"><strong><em><a href="https://support.microsoft.com/en-us/help/12408/microsoft-account-about-two-step-verification" title="Skype two-step verification">Skype</a></em></strong></td>
      <td><i class="fas fa-comment-alt"></i> <i class="fas fa-envelope-square"></i> <i class="fas fa-qrcode"></i></td>
      <td style="text-align: right;"><strong><em><a href="https://telegram.org/blog/sessions-and-2-step-verification" title="Telegram 2-step verification">Telegram</a></em></strong></td>
      <td style="text-align: center;"><i class="fas fa-comment-alt"></i> <i class="fas fa-phone-square"></i></td>
    </tr>
    <tr>
      <td><strong><em><a href="https://faq.whatsapp.com/en/general/26000021" title="WhatsApp 2-step verification">WhatsApp</a></em></strong></td>
      <td><i class="fas fa-comment-alt"></i> <i class="fas fa-phone-square"></i></td>
      <td style="text-align: right;"></td>
      <td></td>
      <td style="text-align: right;"></td>
      <td style="text-align: center;"></td>
    </tr>
  </tbody>
</table>


### سرویس‌های ایمیل

<table>
  <thead>
    <tr>
      <th>سرویس</th>
      <th>متد</th>
      <th style="text-align: right;">سرویس</th>
      <th>متد</th> <th style="text-align: right;">سرویس</th>
      <th style="text-align: center;">متد</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong><em><a href="https://www.google.com/intl/en-US/landing/2step/features.html" title="Gmail two-step verification">Gmail</a></em></strong></td>
      <td><i class="fas fa-comment-alt"></i> <i class="fas fa-phone-square"></i> <i class="fas fa-qrcode"></i> <i class="fas fa-save"></i></td>
      <td style="text-align: right;"><strong><em><a href="https://support.microsoft.com/en-us/help/12408/microsoft-account-about-two-step-verification" title="Outlook two-step verification">Outlook</a></em></strong></td>
      <td><i class="fas fa-comment-alt"></i> <i class="fas fa-qrcode"></i></td>
      <td style="text-align: right;"><strong><em><a href="https://protonmail.com/support/knowledge-base/two-factor-authentication/" title="ProtonMail two-step verification">ProtonMail</a></em></strong></td>
      <td style="text-align: center;"><i class="fas fa-qrcode"></i></td>
    </tr>
    <tr>
      <td><strong><em><a href="https://help.yahoo.com/kb/SLN5013.html" title="Yahoo Mail two-step verification">Yahoo Mail</a></em></strong></td>
      <td><i class="fas fa-comment-alt"></i> <i class="fas fa-phone-square"></i></td>
      <td style="text-align: right;"><strong><em><a href="https://yandex.com/support/passport/authorization/twofa-on.html" title="Yandex.Mail two-step verification">Yandex.Mail</a></em></strong></td>
      <td><i class="fas fa-qrcode"></i></td>
      <td style="text-align: right;"></td>
      <td style="text-align: center;"></td>
    </tr>
  </tbody>
</table>


### بانک‌ها

<table>
  <thead>
    <tr>
      <th>سرویس</th>
      <th>متد</th>
      <th style="text-align: right;">سرویس</th>
      <th>متد</th> <th style="text-align: right;">سرویس</th>
      <th style="text-align: center;">متد</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong><em><a href="https://www.abplus.ir" title="بانک آینده">بانک آینده</a></em></strong></td>
      <td><i class="fas fa-comment-alt"></i> <i class="fas fa-envelope-square"></i></td>
      <td style="text-align: right;"><strong><em><a href="https://ib.bpi.ir/InfoForms/PasargadResponsive_970529/LoginGuide.aspx" title="Pasargad two-step verification">بانک پاسارگاد</a></em></strong></td> <td><i class="fas fa-comment-alt"></i></td>
      <td style="text-align: right;"><strong><em><a href="https://modern.ttbank.ir" title="ttbank two-step verification">بانک توسعه تعاون</a></em></strong></td>
      <td style="text-align: center;"><i class="fas fa-comment-alt"></i></td>
    </tr>
    <tr>
      <td><strong><em><a href="https://ibank.tourism-bank.com/Login.aspx" title="Tourism Bank two-step verification">بانک گردشگری</a></em></strong></td> <td><i class="fas fa-comment-alt"></i> <i class="fas fa-qrcode"></i></td>
      <td style="text-align: right;"><strong><em><a href="https://www.bankmellat.ir/default.aspx" title="Mellat Bank">بانک ملت</a></em></strong></td> <td><i class="fas fa-comment-alt"></i></td>
      <td style="text-align: right;"><strong><em><a href="https://bmi.ir/landing/bam" title="Melli Bank two-step verification">بانک ملی</a></em></strong></td>
      <td style="text-align: center;"><i class="fas fa-comment-alt"></i> <i class="fas fa-qrcode"></i></td>
    </tr>
  </tbody>
</table>

### فضاهای ابری

<table>
  <thead>
    <tr>
      <th>سرویس</th>
      <th>متد</th>
      <th style="text-align: right;">سرویس</th>
      <th>متد</th> <th style="text-align: right;">سرویس</th>
      <th style="text-align: center;">متد</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong><em><a href="https://support.apple.com/en-us/HT204152" title="Apple iCloud two-step verification">Apple iCloud</a></em></strong></td>
      <td><i class="fas fa-comment-alt"></i> <i class="fas fa-qrcode"></i></td>
      <td style="text-align: right;"><strong><em><a href="https://www.dropbox.com/en/help/security/enable-two-step-verification?_locale_specific=en" title="Dropbox two-step verification">Dropbox</a></em></strong></td>
      <td><i class="fas fa-comment-alt"></i> <i class="fas fa-qrcode"></i> <i class="fas fa-save"></i></td>
      <td style="text-align: right;"><strong><em><a href="https://www.google.com/intl/en-US/landing/2step/features.html" title="Google Drive">Google Drive</a></em></strong></td>
      <td style="text-align: center;"><i class="fas fa-comment-alt"></i> <i class="fas fa-phone-square"></i> <i class="fas fa-qrcode"></i> <i class="fas fa-save"></i></td>
    </tr>
    <tr>
      <td><strong><em><a href="https://support.microsoft.com/en-us/help/12408/microsoft-account-about-two-step-verification" title="OneDrive">OneDrive</a></em></strong></td>
      <td><i class="fas fa-comment-alt"></i> <i class="fas fa-qrcode"></i></td>
      <td style="text-align: right;"><strong><em><a href="https://www.sync.com/help/how-do-i-setup-two-factor-authentication/" title="Sync two-step verification">Sync</a></em></strong></td>
      <td><i class="fas fa-envelope-square"></i> <i class="fas fa-qrcode"></i></td>
      <td style="text-align: right;"></td>
      <td style="text-align: center;"></td>
    </tr>
  </tbody>
</table>


### سرویس‌های مدیریت رمز عبور

<table>
  <thead>
    <tr>
      <th>سرویس</th>
      <th>متد</th>
      <th style="text-align: right;">سرویس</th>
      <th>متد</th> <th style="text-align: right;">سرویس</th>
      <th style="text-align: center;">متد</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong><em><a href="https://support.1password.com/two-factor-authentication/" title="1Password two-step verification">1Password</a></em></strong></td>
      <td><i class="fas fa-qrcode"></i></td>
      <td style="text-align: right;"><strong><em><a href="https://support.dashlane.com/hc/en-us/articles/202625042-Protect-your-account-using-Two-Factor-Authentication" title="Dashlane two-step verification">Dashlane</a></em></strong></td>
      <td><i class="fas fa-qrcode"></i> <i class="fas fa-save"></i></td>
      <td style="text-align: right;"><strong><em><a href="https://support.logmeininc.com/lastpass/help/manage-trusted-devices-for-multifactor-authentication-lp030010" title="LastPass two-step verification">LastPass</a></em></strong></td>
      <td style="text-align: center;"><i class="fas fa-qrcode"></i> <i class="fas fa-save"></i></td>
    </tr>
  </tbody>
</table>


### سایر سرویس‌ها

<table>
  <thead>
    <tr>
      <th>سرویس</th>
      <th>متد</th>
      <th style="text-align: right;">سرویس</th>
      <th>متد</th> <th style="text-align: right;">سرویس</th>
      <th style="text-align: center;">متد</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong><em><a href="https://helpx.adobe.com/manage-account.html#2-step-verification" title="Adobe ID two-step verification">Adobe ID</a></em></strong></td>
      <td><i class="fas fa-comment-alt"></i> <i class="fas fa-envelope-square"></i> <i class="fas fa-qrcode"></i></td>
      <td style="text-align: right;"><strong><em><a href="https://www.amazon.com/gp/help/customer/display.html?nodeId=201596330" title="Amazon two-step verification">Amazon</a></em></strong></td>
      <td><i class="fas fa-comment-alt"></i> <i class="fas fa-qrcode"></i></td>
      <td style="text-align: right;"><strong><em><a href="https://www.arvancloud.com/fa/" title="ابرآروان">ابرآروان</a></em></strong></td>
      <td style="text-align: center;"><i class="fas fa-envelope-square"></i></td>
    </tr>
    <tr>
      <td><strong><em><a href="https://support.cloudflare.com/hc/en-us/articles/200167866-How-do-I-set-up-two-factor-authentication" title="Cloudflare two-step verification">Cloudflare</a></em></strong></td>
      <td><i class="fas fa-qrcode"></i></td>
      <td style="text-align: right;"><strong><em><a href="https://epicgames.helpshift.com/a/epic-accounts/?s=epic-accounts&f=what-is-two-factor-authentication-2fa-and-how-do-i-opt-in" title="Epic Games two-step verification">Epic Games</a></em></strong></td>
      <td><i class="fas fa-envelope-square"></i> <i class="fas fa-qrcode"></i></td>
      <td style="text-align: right;"><strong><em><a href="https://support.mozilla.org/en-US/kb/secure-firefox-account-two-step-authentication" title="Firefox two-step verification">Firefox</a></em></strong></td>
      <td style="text-align: center;"><i class="fas fa-qrcode"></i></td>
    </tr>
    <tr>
      <td><strong><em><a href="https://help.github.com/articles/about-two-factor-authentication/" title="Github two-step verification">GitHub</a></em></strong></td>
      <td><i class="fas fa-comment-alt"></i> <i class="fas fa-qrcode"></i> <i class="fas fa-save"></i></td>
      <td style="text-align: right;"><strong><em><a href="https://docs.gitlab.com/ee/user/profile/account/two_factor_authentication.html" title="Gitlab two-step verification">GitLab</a></em></strong></td>
      <td><i class="fas fa-qrcode"></i> <i class="fas fa-save"></i></td>
      <td style="text-align: right;"><strong><em><a href="https://hostiran.net/clientarea.php?action=security" title="Hostiran two-step verification">هاست‌ایران</a></em></strong></td>
      <td style="text-align: center;"><i class="fas fa-comment-alt"></i></td>
    </tr>
    <tr>
      <td><strong><em><a href="https://idpay.ir" title="IDPay two-step verification">آیدی پی</a></em></strong></td>
      <td><i class="fas fa-comment-alt"></i></td>
      <td style="text-align: right;"><strong><em><a href="https://support.office.com/en-us/article/set-up-multi-factor-authentication-for-office-365-users-8f0454b2-f51a-4d9c-bcde-2c48e41621c6?ui=en-US&rs=en-US&ad=US" title="Office 365 two-step verification">Office 365</a></em></strong></td>
      <td><i class="fas fa-comment-alt"></i> <i class="fas fa-phone-square"></i> <i class="fas fa-qrcode"></i></td>
      <td style="text-align: right;"><strong><em><a href="https://www.playstation.com/en-us/account-security/2-step-verification/" title="Playstation two-step verification">PlayStation</a></em></strong></td>
      <td style="text-align: center;"><i class="fas fa-comment-alt"></i></td>
    </tr>
    <tr>
      <td><strong><em><a href="https://support.steampowered.com/kb_article.php?ref=8625-WRAH-9030" title="Steam Guard">Steam</a></em></strong></td>
      <td><i class="fas fa-envelope-square"></i> <i class="fas fa-qrcode"></i></td>
      <td style="text-align: right;"><strong><em><a href="https://blog.twitch.tv/two-factor-authentication-now-available-on-your-twitch-account-b03300862ba7" title="Twitch two-step verification">Twitch</a></em></strong></td>
      <td><i class="fas fa-comment-alt"></i> <i class="fas fa-qrcode"></i></td>
      <td style="text-align: right;"><strong><em><a href="https://support.ubi.com/en-GB/Faqs/000025170/Secure-your-account-with-2-Step-Verification" title="Uplay two-step verification">Uplay</a></em></strong></td>
      <td style="text-align: center;"><i class="fas fa-qrcode"></i></td>
    </tr>
    <tr>
      <td><strong><em><a href="https://meta.wikimedia.org/wiki/Help:Two-factor_authentication" title="Wikipedia two-step verification">Wikipedia</a></em></strong></td>
      <td><i class="fas fa-qrcode"></i></td>
      <td style="text-align: right;"><strong><em><a href="https://support.microsoft.com/en-us/help/12408/microsoft-account-about-two-step-verification" title="Xbox Live two-step verification">Xbox Live</a></em></strong></td>
      <td><i class="fas fa-comment-alt"></i> <i class="fas fa-envelope-square"></i> <i class="fas fa-qrcode"></i></td>
      <td style="text-align: right;"><strong><em><a href="https://www.google.com/intl/en-US/landing/2step/features.html" title="Youtube two-step verification">YouTube</a></em></strong></td>
      <td style="text-align: center;"><i class="fas fa-comment-alt"></i> <i class="fas fa-phone-square"></i> <i class="fas fa-qrcode"></i> <i class="fas fa-save"></i></td>
    </tr>
  </tbody>
</table>


سرویسی را می‌شناسید که از احراز هویت دو عاملی پشتیبانی کرده و در لیست بالا موجود نیست؟ لطفا در بخش نظرات و یا به حساب توییتری [voxxp@](https://twitter.com/voxxp "Vox Populi Twitter Account") معرفی کنید تا به مطلب اضافه شود.

