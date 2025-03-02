<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Recoger los datos del formulario
    $nombre = htmlspecialchars($_POST['nombre']);
    $email = htmlspecialchars($_POST['email']);
    $mensaje = htmlspecialchars($_POST['mensaje']);

    // Configurar el correo
    $to = "info@efdatasolutions.com"; // Tu correo de Microsoft 365
    $subject = "Nueva solicitud de información";
    $body = "Nombre: $nombre\nCorreo: $email\nMensaje: $mensaje";
    $headers = "From: no-reply@efdatasolutions.com\r\n"; // Usa un correo de tu dominio si es posible
    $headers .= "Reply-To: $email\r\n"; // Para que puedas responder al usuario
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

    // Enviar el correo
    if (mail($to, $subject, $body, $headers)) {
        // Redirigir o mostrar mensaje de éxito
        echo "<h2>¡Solicitud enviada!</h2><p>Te contactaremos pronto.</p>";
    } else {
        // Mostrar error
        echo "<h2>Error</h2><p>No se pudo enviar la solicitud. Intenta de nuevo.</p>";
    }
} else {
    echo "<p>Acceso no permitido.</p>";
}
?>