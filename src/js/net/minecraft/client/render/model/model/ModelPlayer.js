window.ModelPlayer = class extends ModelBase {

    /**
     * Create cubes for the zombie model
     */
    constructor() {
        super();

        // Create head ModelRenderer
        this.head = new ModelRenderer(0, 0)
            .setBox(-4.0, -8.0, -4.0, 8, 8, 8);

        // Create body ModelRenderer
        this.body = new ModelRenderer(16, 16)
            .setBox(-4.0, 0.0, -2.0, 8, 12, 4);

        // Right arm ModelRenderer
        this.rightArm = new ModelRenderer(40, 16)
            .setBox(-3.0, -2.0, -2.0, 4, 12, 4);
        this.rightArm.setPosition(-5.0, 2.0, 0.0);

        // Left arm ModelRenderer
        this.leftArm = new ModelRenderer(40, 16)
            .setBox(-1.0, -2.0, -2.0, 4, 12, 4);
        this.leftArm.setPosition(5.0, 2.0, 0.0);

        // Right Legs ModelRenderer
        this.rightLeg = new ModelRenderer(0, 16)
            .setBox(-2.0, 0.0, -2.0, 4, 12, 4);
        this.rightLeg.setPosition(-2.0, 12.0, 0.0);

        // Left leg ModelRenderer
        this.leftLeg = new ModelRenderer(0, 16)
            .setBox(-2.0, 0.0, -2.0, 4, 12, 4);
        this.leftLeg.setPosition(2.0, 12.0, 0.0);
    }

    rebuild(tessellator, group) {
        super.rebuild(tessellator, group);

        this.head.rebuild(tessellator, group);
        this.body.rebuild(tessellator, group);
        this.leftArm.rebuild(tessellator, group);
        this.rightArm.rebuild(tessellator, group);
        this.leftLeg.rebuild(tessellator, group);
        this.rightLeg.rebuild(tessellator, group);
    }

    /**
     * Render the model
     *
     * @param group Group to update position and rotation of
     * @param time Animation offset
     */
    render(group, time) {
        // Set rotation of cubes
        this.head.yRotation = Math.sin(time * 0.83);
        this.head.xRotation = Math.sin(time) * 0.8;
        this.rightArm.xRotation = Math.sin(time * 0.6662 + Math.PI) * 2.0;
        this.rightArm.zRotation = (Math.sin(time * 0.2312) + 1.0);
        this.leftArm.xRotation = Math.sin(time * 0.6662) * 2.0;
        this.leftArm.zRotation = (Math.sin(time * 0.2812) - 1.0);
        this.rightLeg.xRotation = Math.sin(time * 0.6662) * 1.4;
        this.leftLeg.xRotation = Math.sin(time * 0.6662 + Math.PI) * 1.4;

        // Render cubes
        this.head.render(group);
        this.body.render(group);
        this.rightArm.render(group);
        this.leftArm.render(group);
        this.rightLeg.render(group);
        this.leftLeg.render(group);
    }

}