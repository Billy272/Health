import pandas as pd

df = pd.read_csv('./WHO-COVID-19-global-data.csv')

sample_size = 30
sampled_data = df.sample(n=sample_size)

sampled_data.to_csv('./sampled_data.csv', index=False)