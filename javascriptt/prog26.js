console.log(Intl.supportedValuesOf('timeZone'));
const timeZones = Intl.supportedValuesOf('timeZone');

for (let i = 0; i < timeZones.length; i++) {
  console.log(timeZones[i]);
}

let currenttime=new Intl.DateTimeFormat("en-US",{timeZone:"Asia/kolkata",timeStyle:"medium",dateStyle:"long"}).format(new Date());
 
console.log(currenttime);

function generateOTP() {
    return Math.floor(100000 + Math.random() * 900000);
}

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function formatInTimezone(date, timeZone) {
    const formatter = new Intl.DateTimeFormat('en-US', {
        timeZone,
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    });
    return formatter.format(date);
}

const timezones = ['UTC', 'America/New_York', 'Asia/Kolkata', 'Europe/London'];

async function simulateOTPFlow() {
    const otp = generateOTP();
    const sentTime = new Date();

    console.log(`✅ OTP Sent: ${otp}`);
    console.log(`🕒 Sent Time:`);

    timezones.forEach(tz => {
        console.log(`   🌍 ${tz}: ${formatInTimezone(sentTime, tz)}`);
    });

    console.log('\n⏳ Waiting for OTP to be received...');
    await delay(3000);

    const receivedTime = new Date();
    console.log(`\n📥 OTP Received: ${otp}`);
    console.log(`🕒 Received Time:`);

    timezones.forEach(tz => {
        console.log(`   📍 ${tz}: ${formatInTimezone(receivedTime, tz)}`);
    });

    const elapsedSeconds = Math.floor((receivedTime - sentTime) / 1000);
    console.log(`\n⏱️ Total time elapsed: ${elapsedSeconds} seconds`);
}

simulateOTPFlow();