import preprocess_dataset
import mapper
import json
import tensorflow as tf
import numpy as np

SAMPLE_RATE = 22050
    

def predict(song_path, json_path):
    preprocess_dataset.create_mfcc_for_single_track(song_path, json_path)

    with open(json_path, "r") as fp:
        data = json.load(fp)

    # convert lists to numpy arrays
    X = np.array(data)
    
    model = tf.keras.models.load_model('./model/classifier.h5')

    prediction = model.predict(X)
    predicted_index = np.argmax(prediction, axis=1)
    result = np.bincount(predicted_index).argmax()
    return mapper.get_genre(result)
