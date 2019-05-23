from rest_framework import permissions

class UserOnlyAccess(permissions.BasePermission):
    """
    Custom permission to only allow users of an object to access it.
    """

    def has_object_permission(self, request, view, obj):
        return obj.user == request.user


class IsOwnerOrReadOnly(permissions.BasePermission):
    """
    Custom permission to only allow users of an object to access it.
    """

    def has_object_permission(self, request, view, obj):
        if obj.publicStatus == False:
            if request.user.is_anonymous:
                return False;

            return obj.archive == request.user.Archive


        if request.method in permissions.SAFE_METHODS:
            return True

        if request.user.is_anonymous:
            return False;

        return obj.archive == request.user.Archive
