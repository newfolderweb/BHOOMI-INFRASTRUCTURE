Add-Type -AssemblyName System.Drawing
$img = [System.Drawing.Bitmap]::new("C:\Users\aryan\Desktop\BHOOMI\bhoomi-website\public\images\hero-bg.jpeg")
Write-Host "Hero image: $($img.Width)x$($img.Height)"
$file = Get-Item "C:\Users\aryan\Desktop\BHOOMI\bhoomi-website\public\images\hero-bg.jpeg"
Write-Host "File size: $([math]::Round($file.Length / 1KB, 1)) KB"
$img.Dispose()
