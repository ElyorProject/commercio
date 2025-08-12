import google.generativeai as genai

genai.configure(api_key="AIzaSyDQJ-lap0j4qSwfdqBXtr1nSJ-PUvjYN_4")

model = genai.GenerativeModel("gemini-pro")
response = model.generate_content("Напиши описание для интернет-магазина")
print(response.text)
