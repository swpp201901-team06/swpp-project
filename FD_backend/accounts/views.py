from rest_framework import generics
from rest_framework import serializers

from allauth.account.models import EmailAddress
from . import serializers
from . import models
from sdk.api.message import Message
from sdk.exceptions import CoolsmsException
import string
import random
from rest_framework.response import Response


class AccountListView(generics.ListCreateAPIView):
    queryset = EmailAddress.objects.all()
    serializer_class = serializers.AccountSerializer

class AccountDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = EmailAddress.objects.all()
    serializer_class = serializers.AccountSerializer

def send_message(number, key):
    # set api key, api secret
    api_key = ""
    api_secret = ""

    ## 4 params(to, from, type, text) are mandatory. must be filled
    params = dict()
    params['type'] = 'sms' # Message type ( sms, lms, mms, ata )
    params['to'] = number # Recipients Number '01000000000,01000000001'
    params['from'] = '' # Sender number
    params['text'] = "key : " + key # Message
    print(params)
    cool = Message(api_key, api_secret)
    try:
        response = cool.send(params)
        print("Success Count : %s" % response['success_count'])
        print("Error Count : %s" % response['error_count'])
        print("Group ID : %s" % response['group_id'])

        if "error_list" in response:
            print("Error List : %s" % response['error_list'])
        return "success"

    except CoolsmsException as e:
        print("Error Code : %s" % e.code)
        print("Error Message : %s" % e.msg)
        return "error"

class MessageSendView(generics.RetrieveAPIView):
    queryset = models.PhoneNumber.objects.all()
    serializer_class = serializers.PhoneSerailizer

    def get(self, request, number):
        try:
            obj = models.PhoneNumber.objects.get(number=number)
            return Response("exist")
        except:
            pass
        # 숫자 + 대소문자
        string_pool = string.ascii_letters + string.digits
        # 랜덤한 문자열 생성
        key = ""
        for i in range(8):
            key += random.choice(string_pool)
        print(key)
#        send_message(number, key)
        return Response(key)


class PhoneNumberSaveView(generics.ListCreateAPIView):
    queryset = models.PhoneNumber.objects.all()
    serializer_class = serializers.PhoneSerailizer
