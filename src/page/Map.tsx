const htmlContent = `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Google Maps API Example</title>
    <!-- เพิ่ม script tag สำหรับ Google Maps API -->
    <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap" 
            async defer>
    </script>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">

    <style>
        .container{
            margin-top:20px;
        }
    </style>

</head>
<body>
    <section>
        <div class="container">
            <div class="content">
                <div class="content_left">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7960469.022998587!2d101.51207665625002!3d13.038996899999983!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x304d8df747424db1%3A0x9ed72c880757e802!2z4Lib4Lij4Liw4LmA4LiX4Lio4LmE4LiX4Lii!5e0!3m2!1sth!2sth!4v1702369325277!5m2!1sth!2sth" width="100%" height="600" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
                <div class="content_right">
                    <div id="div_tools" class="mt-3">
						ค่า PM 2.5 จากจุดตรวจวัดที่อยู่ในระยะ
						<button class="sw_distance btn btn-success btn-sm active" dvalue="10">10 km</button>
						<button class="sw_distance btn btn-secondary btn-sm" dvalue="20">20 km</button>
						<button class="sw_distance btn btn-secondary btn-sm" dvalue="">All</button>
					</div>
					<p>อัพเดทข้อมูลเมื่อ : <span id="update-time"></span></p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, doloribus.</p>
                </div>
            </div>
        </div>
    </section>
    <!-- สร้าง div สำหรับแสดงแผนที่ -->
    <div id="map" style="height: 400px; width: 100%;"></div> 

    <!-- สร้าง script tag สำหรับโค้ด JavaScript ที่จะใช้ในการแสดงแผนที่ -->
     <script>
        // โค้ด JavaScript จะถูกเรียกเมื่อ API ได้ถูกโหลดเสร็จ
        function initMap() {
            // สร้าง object ของ Google Map
            var map = new google.maps.Map(document.getElementById('map'), {
                center: {lat: -34.397, lng: 150.644}, // ตำแหน่งกลางของแผนที่
                zoom: 8 // ระดับการซูม
            });

            // สร้าง marker (หมุด) บนแผนที่
            var marker = new google.maps.Marker({
                position: {lat: -34.397, lng: 150.644}, // ตำแหน่งของ marker
                map: map, // กำหนดให้ marker ปักบนแผนที่ที่เราสร้าง
                title: 'Hello World!' // ข้อความที่จะแสดงเมื่อเอาเมาส์ไปวางที่ marker
            });
        }
    </script>
    <!-- js bundle -->
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js" integrity="sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js" integrity="sha384-cVKIPhGWiC2Al4u+LWgxfKTRIcfu0JTxR+EQDz/bgldoEyl4H0zUF0QKbrJ0EcQF" crossorigin="anonymous"></script>

</body>
</html>
  `;


/// <reference types="@types/googlemaps" />

const Map = () => { 

  return (
    <>
        <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
    </>
  )
}

export default Map