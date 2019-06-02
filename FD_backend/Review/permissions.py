from rest_framework import permissions

class IsOwnerOrReadOnly(permissions.BasePermission):
    def has_object_permission(self, request, view, obj):
        # 리뷰의 pulbicStatus가 False
        if obj.publicStatus == False:
            # 유저가 로그인을 하지 않은 anonymous user
            if request.user.is_anonymous:
                return False;
            return obj.archive == request.user.archive
        # request method가 안전한 method일 때
        if request.method in permissions.SAFE_METHODS:
            return True
        # request method가 위험한 method이고 유저가 anonymous user일 때
        if request.user.is_anonymous:
            return False;
        # 리뷰가 속해있는 archive와 method를 요청한 유저의 archive가 같은지 비교
        return obj.archive == request.user.archive
