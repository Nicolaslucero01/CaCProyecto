import requests

# URL de la API
url = "https://natsanabria.pythonanywhere.com/excursiones"

try:
    # Realizar la solicitud GET
    response = requests.get(url)

    # Verificar el código de estado
    if response.status_code == 200:
        # Convertir la respuesta a formato JSON
        data = response.json()

        # Mostrar los datos obtenidos
        for excursion in data:
            print(f"Nombre: {excursion['nombre']}")
            print(f"Duración: {excursion['duracion']}")
            print(f"Dificultad: {excursion['dificultad']}")
            print(f"Descripción: {excursion['descripcion']}")
            print(f"Precio: {excursion['precio']}")
            print(f"Cupos: {excursion['cupos']}")
            print(f"Imagen: {excursion['imagen']}")
            print("=" * 50)

    else:
        print(f"Error al obtener los datos. Código de estado: {response.status_code}")

except requests.exceptions.RequestException as e:
    print(f"Error de conexión: {e}")