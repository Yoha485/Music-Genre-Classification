import os
import pickle

import numpy as np
import tensorflow as tf
import matplotlib.pyplot as plt
from tensorflow.keras import layers

# tf.compat.v1.disable_eager_execution()

class GenreClassificationModel(tf.keras.Model): 
  
  def __init__(self):
    super().__init__()
    self.input = layers.Input(shape=(128, 128, 1))
  