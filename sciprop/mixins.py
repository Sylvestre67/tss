__author__ = 'gugs'
from django.utils.decorators import method_decorator
from django.views.decorators.csrf import ensure_csrf_cookie

from django.contrib.auth.decorators import login_required
from django.utils.decorators import method_decorator
from django.core.exceptions import PermissionDenied

class LoginRequiredMixin(object):
    @method_decorator(login_required)
    def dispatch(self, request, *args, **kwargs):
        return super(LoginRequiredMixin, self).dispatch(request, *args, **kwargs)

class StaffRequiredMixin(object):
    @method_decorator(login_required)
    def dispatch(self, request, *args, **kwargs):
        if not request.user.is_staff:
            raise PermissionDenied
        else:
            return super(StaffRequiredMixin, self).dispatch(request, *args, **kwargs)

class EnsureCsrfCookieMixin(object):
    """
    A view mixin which forces class-based view to set CSRF token cookie by
    by applying Django's ensure_csrf_cookie decorator.

    The mixin must be the first (the left-most) in view's superclass list.
    Example:
        class MyView(EnsureCsrfCookieMixin, <other mixins>, DetailView):
            # ... class content ...
    """

    @method_decorator(ensure_csrf_cookie)
    def dispatch(self, request, *args, **kwargs):
        return super(EnsureCsrfCookieMixin, self).dispatch(
            request, *args, **kwargs)