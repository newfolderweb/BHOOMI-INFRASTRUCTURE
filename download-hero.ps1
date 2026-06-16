Add-Type -AssemblyName System.Net.Http
$client = New-Object System.Net.Http.HttpClient
$url = "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=2400&q=90"
$response = $client.GetAsync($url).Result
$bytes = $response.Content.ReadAsByteArrayAsync().Result
[System.IO.File]::WriteAllBytes("C:\Users\aryan\Desktop\BHOOMI\bhoomi-website\public\images\hero-bg-hq.jpeg", $bytes)
Write-Host "Downloaded: $($bytes.Length / 1KB) KB"
$client.Dispose()

# Check dimensions
Add-Type -AssemblyName System.Drawing
$img = [System.Drawing.Bitmap]::new("C:\Users\aryan\Desktop\BHOOMI\bhoomi-website\public\images\hero-bg-hq.jpeg")
Write-Host "Resolution: $($img.Width)x$($img.Height)"
$img.Dispose()
