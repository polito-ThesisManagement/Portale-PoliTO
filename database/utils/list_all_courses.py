import requests
from tqdm import tqdm

base_url = "https://www.polito.it/corsi/"
range_limit = 100
output_file = "courses_list.txt"

total_iterations = range_limit * range_limit

with open(output_file, "w") as file:
    with tqdm(total=total_iterations, desc="Scanning URLs") as pbar:
        for i in range(1, range_limit):
            for j in range(1, range_limit):
                url = f"{base_url}{i}-{j}"
                response = requests.head(url)
                if response.status_code == 301:
                    file.write(f"{url}\n")
                pbar.update(1)