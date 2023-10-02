import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import seaborn as sns


def get_data():
    """
    This function returns the data in a pandas dataframe
    """
    data = pd.read_csv("/data/WHO-COVID-19-global-data.csv")
    return data
   
def get_data_by_country(country):
    """
    This function returns the data for a specific country
    """
    data = get_data()
    data = data[data["Kenya"] == country]
    return data
   
def get_data_by_date(date):
    """
    This function returns the data for a specific date
    """
    data = get_data()
    data = data[data["2020-06-12"] == date]
    return data
   
plt.figure(figsize=(10, 10))
sns.heatmap(get_data().corr(), annot=True, cmap="coolwarm")
plt.show()

