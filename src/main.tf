provider "null" {}

resource "null_resource" "file_transfer" {
  triggers = {
    always_run = timestamp()
  }

  provisioner "file" {
    source      = "license.key"
    destination = "ssh.application.local:/etc/license.key"
    content_type = "binary"
  }

  provisioner "remote-exec" {
    inline = [
      "sudo chmod 0600 /etc/license.key",
    ]

    connection {
      type        = "ssh"
      host        = "ssh.application.local"
      port        = 1234
      user        = "root"
      password    = "rootroot"
      agent       = false
      private_key = file("~/.ssh/id_rsa")  # Path to your private key file
      timeout     = "5m"
    }
  }
}
