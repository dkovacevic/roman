//
// Wire
// Copyright (C) 2016 Wire Swiss GmbH
//
// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with this program. If not, see http://www.gnu.org/licenses/.
//

package com.wire.bots.roman.model;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.wire.lithium.Configuration;

import javax.annotation.Nullable;
import javax.validation.constraints.NotNull;

public class Config extends Configuration {
    @NotNull
    @JsonProperty
    public String key;

    @NotNull
    @JsonProperty
    public String domain;

    @Nullable
    @JsonProperty
    public String romanPubKeyBase64;

    @Nullable
    @JsonProperty
    public String pathToRomanPubKey;
}
