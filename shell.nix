let
  pkgs = import <nixpkgs> {};

in
(pkgs.buildFHSUserEnv {
  name = "cypress";

  targetPkgs = pkgs: (with pkgs; [
    xorg.libXScrnSaver
    xorg.libXdamage
    xorg.libX11
    xorg.libxcb
    xorg.libXcomposite
    xorg.libXi
    xorg.libXext
    xorg.libXfixes
    xorg.libXcursor
    xorg.libXrender
    xorg.libXrandr
    xorg.libxshmfence
    mesa
    cups
    expat
    ffmpeg
    libdrm
    libxkbcommon
    at_spi2_atk
    at_spi2_core
    dbus
    gdk_pixbuf
    gtk3
    cairo
    pango
    xorg.xauth
    glib
    nspr
    atk
    nss
    gtk2
    alsaLib
    gnome2.GConf
    unzip
    (lib.getLib udev)
    # Needed to compile some of the node_modules dependencies from source
    autoreconfHook
    autoPatchelfHook

    nodePackages.prettier
    nodePackages.eslint
    nodejs
  ]);
}).env
