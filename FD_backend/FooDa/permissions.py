from rest_framework import permissions

class UserOnlyAccess(permissions.BasePermission):
    """
    Custom permission to only allow users of an object to access it.
    """

    def has_object_permission(self, request, view, obj):
        return obj.user == request.user


class UserArchiveAccess(permissions.BasePermission):
    """
    Custom permission to only allow users of an object to access it.
    """

    def has_object_permission(self, request, view, obj):
        return obj.archive == request.user.Archive
