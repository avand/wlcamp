Now            = new Date();
TargetDate2013 = new Date(2013, 5, 23, 10, 00, 00, 00);
TargetDate2014 = new Date(2014, 5, 29, 10, 00, 00, 00);
TargetDate2015 = new Date(2015, 5, 28, 10, 00, 00, 00);

if (Now < TargetDate2013) { TargetDate = TargetDate2013; } else
if (Now < TargetDate2014) { TargetDate = TargetDate2014; } else
if (Now < TargetDate2015) { TargetDate = TargetDate2015; }

CountActive   = true;
CountStepper  = -1;
CountStepper  = -1;
DisplayFormat = "Camp begins in %%D%% days %%H%%:%%M%%:%%S%%";
FinishMessage = "Camp begins today!";
LeadingZero   = true;

function calcage(secs, num1, num2) {
  s = ((Math.floor(secs/num1))%num2).toString();

  if (LeadingZero && s.length < 2) {
    s = "0" + s;
  }

  return s;
}

function CountBack(secs) {
  if (secs < 0) {
    document.getElementById("cntdwn").innerHTML = FinishMessage;
    return;
  }

  DisplayStr = DisplayFormat.replace(/%%D%%/g, calcage(secs,86400,100000));

  DisplayStr = DisplayStr.replace(/%%H%%/g, calcage(secs,3600,24));

  DisplayStr = DisplayStr.replace(/%%M%%/g, calcage(secs,60,60));

  DisplayStr = DisplayStr.replace(/%%S%%/g, calcage(secs,1,60));

  document.getElementById("cntdwn").innerHTML = DisplayStr;

  if (CountActive) {
    setTimeout("CountBack(" + (secs+CountStepper) + ")", SetTimeOutPeriod);
  }
}

function putspan() {
  document.write("<div id='cntdwn'></div>");
}

CountStepper = Math.ceil(CountStepper);

if (CountStepper == 0) { CountActive = false; }

var SetTimeOutPeriod = (Math.abs(CountStepper)-1)*1000 + 990;

putspan();

if (CountStepper > 0) {
  ddiff = new Date(Now - TargetDate);
} else {
  ddiff = new Date(TargetDate - Now);
  gsecs = Math.floor(ddiff.valueOf()/1000);
}

CountBack(gsecs);
