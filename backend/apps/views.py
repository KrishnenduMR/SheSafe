from django.http import HttpResponse
from django.shortcuts import render
import cv2
from tensorflow import keras
from keras.models import load_model
from keras import models
import numpy as np
from skimage.transform import resize
import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import MultiLabelBinarizer
from sklearn.feature_extraction.text import TfidfVectorizer
import speech_recognition as sr
import joblib
import moviepy.editor as mp

from scipy.io.wavfile import read
from transformers import AutoTokenizer, TFAutoModelForSequenceClassification
import tensorflow as tf

from django.views.generic.edit import FormView
from multiprocessing import context
from django.shortcuts import render


from keras.models import Sequential
from keras.layers import Conv2D, MaxPooling2D
from keras.layers import Dense, Flatten
import requests
from twilio.rest import Client
from django.views.decorators.csrf import csrf_exempt
import json
from django.contrib.auth import authenticate, login, logout
from django.db import IntegrityError
from django.http import HttpResponse, HttpResponseRedirect
from .models import User, Location, Story

reloadModel=joblib.load('./models/mymodel.pkl')
tfidf = TfidfVectorizer(stop_words='english', analyzer='word',
                        max_features=10000, ngram_range=(1, 3))
def login_view(request):
    if request.method == "POST":

        # Attempt to sign user in
        username = request.POST["username"]
        password = request.POST["password"]
        user = authenticate(request, username=username, password=password)

        # Check if authentication successful
        if user is not None:
            login(request, user)
            return HttpResponseRedirect(reverse("index"))
        else:
            return render(request, "auctions/login.html", {
                "message": "Invalid username and/or password."
            })
    else:
        return render(request, "login.html")


def logout_view(request):
    logout(request)
    return HttpResponseRedirect(reverse("index"))


def register(request):
    if request.method == "POST":
        username = request.POST["username"]
        email = request.POST["email"]

        # Ensure password matches confirmation
        password = request.POST["password"]
        confirmation = request.POST["confirmation"]
        if password != confirmation:
            return render(request, "register.html", {
                "message": "Passwords must match."
            })

        # Attempt to create new user
        try:
            user = User.objects.create_user(username, email, password)
            user.save()
        except IntegrityError:
            return render(request, "register.html", {
                "message": "Username already taken."
            })
        login(request, user)
        return HttpResponseRedirect(reverse("index"))
    else:
        return render(request, "register.html")

@csrf_exempt
def getmylocation(request):
    if request.method == 'POST':
        print(request.body)
        a = request.body
        b = (json.loads(a.decode('utf-8')))
        mylong = (b.get("Longitude"))
        mylat = (b.get("Latitude"))

        account_sid = ""
        auth_token = "c4b7044a765a0d171033e2f99939f06b"
        client = Client(account_sid, auth_token)

        message = client.messages.create(
                                    body="I am in DANGER, my coordinates are\n" + "http://www.google.com/maps/place/" + str(mylat) + "," + str(mylong),
                                    from_='+19126003960',
                                    to='+919767314066'
                                )
        print(message.sid)
        if len(message.sid)!=0:
            # print("send")
            context = {"SEND": "SENT"}
            print(context.get("SEND"))
            return render(request,'location.html')
        return render(request,'location.html')

def increment(request):
  if request.method=="POST":
        b=request.POST["getloc"]
        wac=Location.objects.get(id=int(b))
        
        
